import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import HomePage  from "./Pages/HomePage/HomePage.tsx";
import UsersPage from "./Pages/UsersPage/UsersPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

// ReactDOM.createRoot(document.getElementById('users-list')!).render(<AppUsers />)
