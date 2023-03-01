import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Loja de Jogos</h1>
      </header>
      <div id="box" className="container-fluid row align-items-center" >
            <div id='div-form-login' className="col-lg-12 col-md-12 text-center">
                <form id="login" className="col-lg-6 col-md-12">
                    <h2>Login</h2>
                    <input type="text" name="email" id="email" placeholder="e-mail"></input>
                    <input type="password" name="password"id="password" placeholder="senha"></input>
                    <p id="loginError"></p>
                    <button type= "button" onClick="login()">Entrar</button>
                </form>
            </div>
        </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
