import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <body class="shoe">
        <div class="loader"><span>Karte...</span></div>
        <a href="#0" class="scrollToTop"><i class="flaticon-up-arrow"></i></a>
        <div id="app"></div>
</body> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
