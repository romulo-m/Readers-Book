import React from 'react'
import { Link } from 'react-router-dom'
import S from './SideMenu.module.css'

const SideMenu = () => {
  return (
    <div className={S.menu}>
        <nav className={S.nav}>
            <Link to={"/"}>Início</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/cadastro"}>Cadastro</Link>
        </nav>
    </div>
  )
}

export default SideMenu