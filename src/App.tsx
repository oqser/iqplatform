import React from 'react';
import './App.css'
import { Outlet, Link } from "react-router-dom";
import { ButtonAppBar } from "./Components";

export default function App() {
    return (
        <>
            < ButtonAppBar />
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <Link to={`home`}>Home page</Link>
                        </li>
                        <li>
                            <Link to={`users`}>Users table</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}





