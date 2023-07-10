import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const token = sessionStorage.getItem("token");
  const userid = sessionStorage.getItem("userid");
  const location = useLocation();

  if (!token || location.pathname.split("/")[1] !== userid) {
    return <Navigate to="/" replace />;
  }

  // if token and userid are valid, render the children
  return children;
}

export default RequireAuth;
