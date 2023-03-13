import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";
import AuthLogin from "../pages/auth/Login";
import AuthRegister from "../pages/auth/Register";
import ProductIndex from "../pages/product";

const AppRouter = () => {
    return (
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/auth/login' component={AuthLogin} />
        <Route path='/auth/register' component={AuthRegister} />
        <Route path='/profile' component={ProductIndex} />
        <Route path='/product' component={ProductIndex} />
        {/* <Route
          path='*'
          exact
          render={() => (
            <div>
              <h1>Page not found</h1>
            </div>
          )}
        /> */}
      </Switch>
    );
  };
  
  export default AppRouter;