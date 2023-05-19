import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InicioPage from "./pages/InicioPage/InicioPage";
import  HistorialPage  from "./pages/HistorialPage/HistorialPage";

import { HistoryContextProvider } from "./context/HistoryContext";
import  BuscarPage  from "./pages/BuscarPage/BuscarPage";
import MenuSuperior from "./components/MenuSuperior/MenuSuperior";
import Separador from "./components/Separador/Separador";
const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));

 

const AppRouter = () => {

    return (

        <Router>
            <MenuSuperior></MenuSuperior>
            <Separador></Separador>
            <HistoryContextProvider></HistoryContextProvider>
            <Routes>

                <Route exact path="/" element={<InicioPage />} />
                <Route exact path="/buscar/:ciudad" element={<BuscarPage />}></Route>
                <Route exact path="/historial" element={<HistorialPage />}></Route>
                <Route path="*" element={

                    <Suspense fallback={<div>Loading...</div>}>

                        <ErrorPage></ErrorPage>;

                    </Suspense>

                } />

            </Routes>

        </Router>

    );

};

export default AppRouter