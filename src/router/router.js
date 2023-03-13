import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLogin from "../pages/auth/Login";
import AuthRegister from "../pages/auth/Register";
import ProductIndex from "../pages/product";

export default createBrowserRouter([
    {
      path: "/",
      Component: App,
    },
    {
        path: "/product",
        Component: ProductIndex,
    },
    {
        path: "/auth/register",
        Component: AuthRegister,
    },
    {
        path: "/auth/login",
        Component: AuthLogin,
    }
  ]
  );