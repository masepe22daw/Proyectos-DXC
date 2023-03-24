import { Redirect, Route } from "react-router-dom"
import UseAuth from "../auth/UseAuth";

export default function PublicRoute({ component: Compoment, ...rest }) {
    const auth = UseAuth();

    return (
        <Route {...rest}>
            {!auth.isLogged() ? (<Compoment />) : (<Redirect to="/dashboard"/>)}
        </Route>
    )
}
