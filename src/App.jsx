import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideMenu from './components/SideMenu/SideMenu'
import Inicio from './pages/Inicio/Inicio'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <SideMenu/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
