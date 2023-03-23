import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import AboutPage from "../pages/AboutPage"
import CategoriesPage from "../pages/CategoriesPage"
import ContactPage from "../pages/ContactPage"
import { DashboardPage } from "../pages/DashboardPage"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import NotFoundPage from "../pages/NotFoundPage"
import { PaymentsPage } from "../pages/PaymentsPage"
import ProfilePage from "../pages/ProfilePage"
import { RegisterPage } from "../pages/RegisterPage"
import PrivateRoute from "./PrivateRoute"

const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/" component={HomePage} />

                <Route exact path="/profile/:username" component={ProfilePage} />
                <Route exact path="/categories" component={CategoriesPage} />
                
                <Route exact path="/signin"><Redirect to="/login" /></Route>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                
                <PrivateRoute exact path="/dashboard" component={DashboardPage} />
                <PrivateRoute exact path="/payments" component={PaymentsPage} />



                <Route path="*" component={NotFoundPage} />

                
            </Switch>
        </Router>
    )
}

export default AppRouter