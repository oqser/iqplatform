import React, {useState} from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage, UsersPage } from './Pages'

function App() {

  return (
      <>
          <div>

          <h1>h1asdasd</h1>
          <header>
              <Link to="/">Home</Link>
              <Link to="/Users">Users</Link>
              <Link to="/">About</Link>
          </header>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/Users" element={<UsersPage/>}/>
          </Routes>
          </div>
      </>
  )
}

export default App





