import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import S from "./ModalAlert.module.css"


const ModalAlert = ({open, onClose}) => {
  return (
    <div>
        <Modal
          open={open}
          onClose={onClose}>
<Box className ={S.style}>
    <p>Preencha todos os campos</p>
    <Button onClick={onClose}> Cancelar </Button>
  </Box>
</Modal>
          
    </div>
  )
}

export default ModalAlert