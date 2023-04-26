import React, { Suspense } from "react";

import PuntuacionPage from "./pages/PuntuacionPage/PuntuacionPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import  JuegoPage  from "./pages/JuegoPage/JuegoPage";

import GameSelectionPage  from "./pages/GameSelectionPage/GameSelectionPage";

import  LevelSelectionPage  from "./pages/LevelSelectionPage/LevelSelectionPage";

const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));


const AppRouter = () => {

    return (

        <Router>

            <Routes>

                <Route exact path="/score" element={<PuntuacionPage />} />

                <Route exact path="/juego" element={<JuegoPage />} />

                <Route exact path="/games" element={<GameSelectionPage />} />

                <Route exact path="/levels/:game" element={<LevelSelectionPage />} />

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