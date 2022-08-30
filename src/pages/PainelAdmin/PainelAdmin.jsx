import React from 'react'
import S from './PainelAdmin.module.css'

const PainelAdmin = () => {
  return (
    <div className={S.main}>
        <header className={S.header}>
        <h1 className={S.headerh1}>Dashboard</h1>
        <div className={S.usrimg}></div>
        </header>
        <hr></hr>
    </div>
  )
}

export default PainelAdmin