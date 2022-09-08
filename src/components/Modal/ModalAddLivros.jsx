import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Input from "../../components/Input/Input";
import { livrosPost } from "../../service/ApiLivros";

import Label from "../Label/Label";
import { useState } from "react";
import S from "../Modal/ModalAddLivros.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  heigth: "800px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalAddLivros = ({ open, onClose, handleAtualizaTela }) => {
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
    const response = await livrosPost(res);
    setRes(response);
    onClose();
    handleAtualizaTela();
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
          <form className={S.form}>
            <Label style={{ textAlign: "left" }} texto={"Titulo"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.titulo}
              onChange={({ target }) => handleChange(target, "titulo")}
            />
            <Label style={{ textAlign: "left" }} texto={"Autor"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.autor}
              onChange={({ target }) => handleChange(target, "autor")}
            />
            <Label style={{ textAlign: "left" }} texto={"Gênero"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.genero}
              onChange={({ target }) => handleChange(target, "genero")}
            />
            <Label style={{ textAlign: "left" }} texto={"Formato"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.formato}
              onChange={({ target }) => handleChange(target, "formato")}
            />
            <Label style={{ textAlign: "left" }} texto={"Valor"} />
            <Input
              required
              type={"number"}
              style={S.input}
              value={res.valor}
              onChange={({ target }) => handleChangeNum(target, "valor")}
            />
            <Label style={{ textAlign: "left" }} texto={"Idioma"} />
            <Input
              required
              type={"text"}
              style={S.input}
              value={res.idioma}
              onChange={({ target }) => handleChange(target, "idioma")}
            />
            <Label style={{ textAlign: "left" }} texto={"Número de Páginas"} />
            <Input
              required
              type={"number"}
              style={S.input}
              value={res.numeroPaginas}
              onChange={({ target }) => handleChange(target, "numeroPaginas")}
            />
            <Button onClick={createPost}> Criar </Button>
            <Button onClick={onClose}> Voltar </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalAddLivros;