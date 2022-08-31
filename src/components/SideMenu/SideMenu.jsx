import React from 'react'
import { Link } from 'react-router-dom'
import S from './SideMenu.module.css'

const SideMenu = () => {
  return (
    <div className={S.menu}>
        <nav className={S.nav}>
            <Link className={S.linha} to={"/"}>Login</Link>
            <Link className={S.linha} to={"/home"}>Início</Link>
            <Link className={S.linha} to={"/cadastro"}>Cadastro</Link>
            <Link className={S.linha} to={"/dashboard"}>Dashboard</Link>
        </nav>
    </div>
  )
}

export default SideMenu