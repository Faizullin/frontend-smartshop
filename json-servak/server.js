const jsonServer = require('json-server');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('db.json', {
    foreignKeySuffix: '_id',
    watch: true,
    noCors: false,
    static: './public',
    // Add the following option to use router.json instead of db.json
    _isFake: true, // this flag tells json-server that this router is fake
    source: './routes.json' 
});

const SECRET_KEY = 'secret_key';
const REFRESH_SECRET_KEY = 'refresh_secret_key';

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// Authentication endpoint to generate access and refresh tokens
server.post('/api/token', (req, res) => {
  const { email, password } = req.body;
  const user = router.db.get('users').find({ email }).value();

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const accessToken = jwt.sign({ sub: user.id }, SECRET_KEY, { expiresIn: '5m' });
  const refreshToken = jwt.sign({ sub: user.id }, REFRESH_SECRET_KEY, { expiresIn: '7m' });

  res.json({ accessToken, refreshToken });
});

// Authentication endpoint to refresh access token
server.post('/api/token/refresh', (req, res) => {
  const { refreshToken } = req.body;

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY);

    const user = router.db.get('users').find({ id: decoded.sub }).value();
    if (!user) {
      throw new Error('User not found');
    }

    const accessToken = jwt.sign({ sub: user.id }, SECRET_KEY, { expiresIn: '30m' });
    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
});

// Authorization middleware to check access token on protected routes
const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'No authorization header' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No access token found' });
  }

  try {
   
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = router.db.get('users').find({ id: decoded.sub }).value();
    next();
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

// Protected endpoint that requires authorization
server.get('/api/user', authorize, (req, res) => {
  res.json(req.user);
});

server.post('/api/register', (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    const existingUser = router.db.get('users').find({ email }).value();
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
  
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = { email, password: hashedPassword };
    router.db.get('users').push(user).write();
  
    const accessToken = jwt.sign({ sub: user.id }, SECRET_KEY, { expiresIn: '30m' });
    const refreshToken = jwt.sign({ sub: user.id }, REFRESH_SECRET_KEY, { expiresIn: '7d' });
  
    res.json({ accessToken, refreshToken });
});

server.use(router);

server.listen(1000, () => {
  console.log('JSON Server is running');
});
