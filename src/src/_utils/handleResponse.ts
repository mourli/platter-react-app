import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store";


export const handleResponse = (response: any) => {
    const dispatch = useDispatch();

    return response.text().then((text: any):Promise<any> => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                dispatch(logout());
                window.location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}