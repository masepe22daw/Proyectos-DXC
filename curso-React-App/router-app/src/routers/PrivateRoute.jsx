import { Redirect, Route, useLocation } from "react-router-dom"
import UseAuth from "../auth/UseAuth";

//const user = null;
//const user = {id:1, username:"Luis50"}

export default function PrivateRoute({ component: Compoment, ...rest }) {
    const auth = UseAuth();
    const location = useLocation();

    return (
        <Route {...rest}>
            {auth.isLogged() ? (<Compoment />) : (<Redirect to={{pathname:"/login", state: {from: location} }}/>)}
        </Route>
    )
}
