import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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
  };

const ModalAlert = ({open, onClose}) => {
  return (
    <div>
        <Modal
          open={open}
          onClose={onClose}>
<Box sx={style}>
    <p>Preencha todos os campos</p>
    <Button onClick={onClose}> Cancelar </Button>
  </Box>
</Modal>
          
    </div>
  )
}

export default ModalAlert