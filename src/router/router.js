import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import About from "../pages/about/About";
import AuthLogin from "../pages/auth/Login";
import AuthRegister from "../pages/auth/Register";
import CartIndex from "../pages/cart/Index";
import ProductIndex from "../pages/product/Index"
import ProductShow from "../pages/product/Show";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    
      <Route
        // loader={rootLoader}
        // action={rootAction}
        // errorElement={<ErrorPage />}
      >
          <Route exact path='/' Component={ProductIndex} />
          
          <Route exact path='/product' Component={ProductIndex} />
          <Route path="/product/:id" Component={ProductShow} />
          <Route path='/cart' Component={CartIndex} />
          <Route path='/about' Component={About} />
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
