import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InicioPage from "./pages/InicioPage/InicioPage";
const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));


const AppRouter = () => {

    return (

        <Router>

            <Routes>

                <Route exact path="/inicio" element={<InicioPage />} />

                <Route path="/" element={

                    <Suspense fallback={<div>Loading...</div>}>

                        <ErrorPage></ErrorPage>;

                    </Suspense>

                } />

            </Routes>

        </Router>

    );

};

export default AppRouter