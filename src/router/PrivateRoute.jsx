/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center">
            <button className="btn loading">loading</button>
        </div>;
    }

    if (user) {
        return children;
    }
    return <Navigate to='/dashboard' state={{ from: location }} replace></Navigate>;

};

export default PrivateRoute;