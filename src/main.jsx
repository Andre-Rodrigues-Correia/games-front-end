import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './pages/Home/Home'
import CreateGame from './pages/CreateGame'
import FindGame from './pages/FindGame'
import DeleteGame from './pages/DeleteGame'
import UpdateGame from './pages/UpdateGame'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/create-game' element={<CreateGame />}/>
          <Route path='/update-game' element={<UpdateGame />}/>
          <Route path='/delete-game' element={<DeleteGame />}/>
          {/* <Route path='/find-game' element={<FindGame />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
