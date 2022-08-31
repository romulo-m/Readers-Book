import React from 'react'
import { Link } from 'react-router-dom'
import S from './SideMenu.module.css'

const SideMenu = () => {
  return (
    <div className={S.menu}>
        <nav className={S.nav}>
            <Link to={"/"}>Login</Link>
            <Link to={"/home"}>Início</Link>
            <Link to={"/cadastro"}>Cadastro</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
        </nav>
    </div>
  )
}

export default SideMenu