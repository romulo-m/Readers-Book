import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {livrosDelete} from '../../service/ApiLivros'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexdirection: 'column',
  };
const ModalDeleteLivros = ({open, onClose, deletaLivros, idLivro}) => {
  return (
    <div>
       
<Modal
  open={open}
  onClose={onClose}
>
  <Box sx={style}>
    <p>Deseja deletar este livro de id {idLivro}?</p>
    <Button onClick={deletaLivros}> Ok </Button>
    <Button onClick={onClose}> Cancelar </Button>
  </Box>
</Modal>
    </div>
  )
}

export default ModalDeleteLivros