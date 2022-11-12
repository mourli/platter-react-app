import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = (props: any) => {    
    const { isLoggedin, roles } = useSelector((state: any) => state.authUser.value);

    // not logged in so redirect to login page with the return url
    if (!isLoggedin) {
        return <Navigate to="/login" replace />;
    }

    // check if route is restricted by role    
    if (props.roles) {
        // role not authorised so redirect to home page
        if (!(roles && props.roles.some((r: string) => roles.indexOf(r) >= 0)))
            return <Navigate to="/403" />
    }

    return <Outlet/>;
}