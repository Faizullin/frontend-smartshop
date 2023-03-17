import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import AuthLogin from "../pages/auth/Login";
import AuthRegister from "../pages/auth/Register";
import ProductIndex from "../pages/product/index"

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    
      <Route
        // loader={rootLoader}
        // action={rootAction}
        // errorElement={<ErrorPage />}
      >
        
          <Route path='/' exact Component={ProductIndex} />
          <Route path='/cart' Component={ProductIndex} />
          <Route path='/auth/login' Component={AuthLogin} />
          <Route path='/auth/register' Component={AuthRegister} />

      </Route>
  )
)
export default AppRouter;
//   createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       {
//         path: "/auth/login",
//         Component: AuthLogin,
        
//       }
//     ]
//   }
// ])
