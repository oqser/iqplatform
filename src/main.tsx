import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage  from "./Pages/HomePage/HomePage.tsx";
import UsersPage from "./Pages/UsersPage/UsersPage.tsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.tsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            { path:"home", element: <HomePage /> },
            { path:"users", element: <UsersPage /> },
        ]
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
        <RouterProvider router={router} />
);