import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import S from "./ModalDeleteLivros.module.css"


const ModalDeleteLivros = ({open, onClose, deletaLivros, idLivro}) => {
  return (
    <div>
       
<Modal
  open={open}
  onClose={onClose}
>
  <Box className={S.style}>
    <p>Deseja deletar este livro de id {idLivro}?</p>
    <Button onClick={deletaLivros}> Ok </Button>
    <Button onClick={onClose}> Cancelar </Button>
  </Box>
</Modal>
    </div>
  )
}

export default ModalDeleteLivros