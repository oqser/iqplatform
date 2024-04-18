import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserTable from "./UserTable.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <UserTable />
  </React.StrictMode>

)

// ReactDOM.createRoot(document.getElementById('users-list')!).render(<AppUsers />)
