import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    
    const isAuthenticated = localStorage.getItem('userInfo');

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    );
}

export default PrivateRoute;