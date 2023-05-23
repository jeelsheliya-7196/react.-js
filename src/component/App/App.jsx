import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import images from '../../assets/images/download.jpg';
import viteLogo from '/vite.svg'
import './App.css'
import List from '../List/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='car'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {/* <img src={images} alt="images" />
        <h3>Name:- <span>Jeel Sheliya</span></h3>
        <h3>Phone:- <span>6353481047</span></h3>
        <h3>Email:- <span>jeel71@gmail.com</span></h3> */}
        {/* <h3>Name:- <span>Jeel Sheliya</span></h3> */}
      </div>
      {/* <h1>Vite + React</h1> */}
      < List />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App
