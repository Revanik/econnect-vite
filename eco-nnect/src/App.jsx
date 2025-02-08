import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // 1. Add a state to hold the backend data (optional)
  const [backendMessage, setBackendMessage] = useState("");

  // 2. Use useEffect to call your backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setBackendMessage(data.message); 
        // e.g., "Hello from the backend!"
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 
  // The empty dependency array makes it run only once on mount.

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* 3. Display the result from the backend if you want */}
      <p>Backend says: {backendMessage}</p>

      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
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
