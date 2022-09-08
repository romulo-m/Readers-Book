import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import PainelAdmin from './pages/PainelAdmin/PainelAdmin'
import SideMenu from './components/SideMenu/SideMenu'
import Update from './pages/Update/Update'
import UserProvider from './contexts/UserProvider'

const Routes = () => {
  return (
    <BrowserRouter>
    <UserProvider>
        <Switch>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Inicio/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/dashboard' element={<PainelAdmin/>}/>
            <Route path='/update/:id' element={<Update />}/>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  )
}

export default Routes