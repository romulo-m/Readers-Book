import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import S from './PainelAdmin.module.css'

const PainelAdmin = () => {
  return (
    <div className={S.main}>
        <header className={S.header}>
        <h1 className={S.headerh1}>Dashboard</h1>
        <div className={S.usrimg}></div>
        </header>
        <hr className={S.hr}></hr>
        <div className={S.topActions}>
        <Input type="text" style={S.searchbar} placeholder="Buscar"/>
        <Button texto="Criar" style={S.btnCriar}/>
        </div>
    </div>
  )
}

export default PainelAdmin