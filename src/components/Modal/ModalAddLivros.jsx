import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Input from '../../components/Input/Input'
import { livrosPost} from '../../service/ApiLivros'

import Label from '../Label/Label';
import {useState} from 'react'
import S from '../Modal/ModalAddLivros.module.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  heigth: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 const ModalAddLivros = ({ open, onClose, setRender}) => {

    const [res, setRes] = useState ({
        titulo: "",
        autor: "",
        genero: "",
        formato: "",
        valor: "",
        idioma: " ",
        numeroPaginas: ""
      });

  


  const handleChange = (target, key) => {
    const value = target.value
    setRes({...res, [key]: value})
  }

  const handleChangeNum = (target, key) => {
    const value = target.valueAsNumber
    setRes({...res, [key]: value})
  }

  function createPost(e) {
    e.preventDefault()
    livrosPost(res)
    setRender(true)
    onClose()
    setRes({
      titulo: "",
      autor: "",
      genero: "",
      formato: "",
      valor: "",
      idioma: " ",
      numeroPaginas: ""
    })
}

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form className = {S.form}>
        <Label style = {{textAlign: "left"}} texto = {"titulo"} />
            <Input type={"text"} style ={S.input} value={res.titulo} onChange={({target}) => handleChange(target, "titulo")}/>
            <Label style = {{textAlign: "left"}} texto = {"formato"}/>
            <Input type={"text"} style ={S.input}  value={res.formato} onChange={({target}) => handleChange(target, "formato")}/>
            <Label style = {{textAlign: "left"}} texto = {"valor"}/>
            <Input type={"number"} style ={S.input}  value={res.valor} onChange={({target}) => handleChangeNum(target, "valor")}/>
                <Button   onClick={createPost}> Criar </Button>
                <Button onClick={onClose}>  Voltar </Button>
                </form>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalAddLivros
