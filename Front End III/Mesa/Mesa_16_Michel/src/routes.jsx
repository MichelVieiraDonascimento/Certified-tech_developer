import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


import HomePage from "./pages/Home"

import EditarPage from "./pages/Editar"

import CadastrarPage from "./pages/Cadastrar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/editar/:alunoID",
        element : <EditarPage/>,
    },
    {
        path: "/cadastrar",
        element : <CadastrarPage/>,
    },
]);

function Routes() {
    return (
        <>
            <RouterProvider router = {router} />
        </>
    )
}

export default Routes
