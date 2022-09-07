import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import ModalAddLivros from '../../components/Modal/ModalAddLivros'
import Table from '../../components/Table/Table'
import {getLivroTitulo} from '../../service/ApiLivros'
import S from './PainelAdmin.module.css'

const PainelAdmin = () => {
  const [render, setRender] = useState(false)
  const [titulo, setTitulo] = useState('')

  function handleChange(e) {
    const value = e.target.value    
    setTitulo(value)
    getLivroTitulo(value)

  }
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={S.main}>
        <header className={S.header}>
        <h1 className={S.headerh1}>Dashboard</h1>
        <div className={S.usrimg}></div>
        </header>
        <hr className={S.hr}></hr>
        <div className={S.topActions}>
        <Input type="text" style={S.searchbar} value={titulo} onChange={handleChange} placeholder="Buscar"/>
        <Button texto="Adicionar" onClick={handleOpen} style={S.btnCriar}/>
        </div>
        <section className={S.content}>
          <h2>Gerenciamento de Produtos</h2>
          <Table setRender = {setRender} render = {render}/>
        </section>
        <ModalAddLivros 
        setRender ={setRender}
         open={open}
         onClose={handleClose}
         />
    </div>
  )
}

export default PainelAdmin