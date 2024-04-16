import {useState} from 'react'
import iq_platform from './assets/123.png'
import iq_centr from './assets/345.png'
import './App.css'
// import * as React from 'react';
// todo: color the background of pictures

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://iq-centr.ru/cheboksary" target="_blank">
          <img src={iq_centr} className="logo" alt="Vite logo" />
        </a>
        <a href="https://iq-centr.ru/" target="_blank">
          <img src={iq_platform} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>iq-platform</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Нажми меня {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
      </div>
      <p className="read-the-docs">
        Click on the iq-school logos to learn more
      </p>
    </>
  )
}

export default App





