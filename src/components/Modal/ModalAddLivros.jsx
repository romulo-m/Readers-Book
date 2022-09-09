import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Input from "../../components/Input/Input";
import { livrosPost } from "../../service/ApiLivros";
import Label from "../Label/Label";
import { useState } from "react";
import S from "../Modal/ModalAddLivros.module.css";
import ModalAlert from "./ModalAlert";

const ModalAddLivros = ({ open, onClose, handleAtualizaTela }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [res, setRes] = useState({
    titulo: "",
    autor: "",
    genero: "",
    formato: "",
    valor: "",
    idioma: " ",
    numeroPaginas: "",
  });
  


  const handleChange = (target, key) => {
    const value = target.value;
   

      setRes({ ...res, [key]: value });
    
  };

  const handleChangeNum = (target, key) => {
    const value = target.valueAsNumber;
    setRes({ ...res, [key]: value });
  };

  async function createPost(e) {
    e.preventDefault();
    if((res.titulo && res.autor && res.genero && res.formato && res.valor && res.idioma && res.numeroPaginas) === ""){
     
     abrirModal()
    }else{
      const response = await livrosPost(res);
      
      setRes(response);
      onClose();
      handleAtualizaTela();
    }
  }

  function abrirModal() {
    
    setOpenAlert(true);
  }

  function fecharModal() {
    setOpenAlert(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className ={S.style}>
          <form className={S.form}>
            <Label style={{ textAlign: "center" }} texto={"Título"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.titulo}
              onChange={({ target }) => handleChange(target, "titulo")}
            />
            <Label style={{ textAlign: "center" }} texto={"Autor"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.autor}
              onChange={({ target }) => handleChange(target, "autor")}
            />
            <Label style={{ textAlign: "center" }} texto={"Gênero"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.genero}
              onChange={({ target }) => handleChange(target, "genero")}
            />
            <Label style={{ textAlign: "center" }} texto={"Formato"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.formato}
              onChange={({ target }) => handleChange(target, "formato")}
            />
            <Label style={{ textAlign: "center" }} texto={"Valor"} />
            <Input
              required
              type={"number"}
              style={S.input}
              value={res.valor}
              onChange={({ target }) => handleChangeNum(target, "valor")}
            />
            <Label style={{ textAlign: "center" }} texto={"Idioma"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.idioma}
              onChange={({ target }) => handleChange(target, "idioma")}
            />
            <Label style={{ textAlign: "center" }} texto={"Número de Páginas"} />
            <Input
              required
              type={"number"}
              style={S.input}
              value={res.numeroPaginas}
              onChange={({ target }) => handleChange(target, "numeroPaginas")}
            />
            <div className={S.butaoD}>
            <Button onClick={createPost} > Criar </Button>
            <Button onClick={onClose} > Voltar </Button>
            </div>
          
          </form>
        </Box>
      </Modal>
      <ModalAlert
      open={openAlert}
      onClose={fecharModal}
      />
    </div>
  );
};
export default ModalAddLivros;
