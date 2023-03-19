import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector(state => state.authReducer);
  console.log("AUTH",isAuthenticated)
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />
    }
  
    return children
};
export default ProtectedRoute;