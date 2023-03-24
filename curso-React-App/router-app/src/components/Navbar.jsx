import { NavLink } from "react-router-dom"
import UseAuth from "../auth/UseAuth"

export const Navbar = () => {
    const auth = UseAuth();
    return (
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="active" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>

            <li>
                <NavLink to="/categories" activeClassName="active">Categories</NavLink>
            </li>
            {
                !auth.isLogged() && (<>
                    <li>
                        <NavLink to="/login" activeClassName="active">Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/register" activeClassName="active">Registro</NavLink>
                    </li>
                </>)
            }

            {
                auth.isLogged() && (<>
                    <li>
                        <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
                    </li>

                    <li>
                        <NavLink to="/payments" activeClassName="active">Payments</NavLink>
                    </li>

                    <li>
                        <button onClick={auth.logout}>Logout</button>
                    </li>
                </>

                )
            }
        </ul>

    )
}
