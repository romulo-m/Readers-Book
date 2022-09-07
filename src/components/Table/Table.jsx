import React, { useState } from "react";
import { RiEdit2Fill, RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { livrosDelete } from "../../service/ApiLivros";
import ModalDeleteLivros from "../Modal/ModalDeleteLivros";
import S from "./Table.module.css";

const Table = ({ id, titulo, formato, valor, handleAtualizaTela}) => {
  const [idLivro, setIdLivro] = useState();
  const [openDelete, setOpenDelete] = useState(false);

  async function deletarLivro() {
    try {
      const response = await livrosDelete(idLivro);
      fecharModal();
      handleAtualizaTela()
    } catch (e) {
      return e.message;
    }
  }

  function abrirModal(id) {
    setIdLivro(id);
    setOpenDelete(true);
  }

  function fecharModal() {
    setOpenDelete(false);
  }

  return (
      <>      
              <tr className={S.linha} key={idLivro}>
                <td>{id}</td>
                <td>{titulo}</td>
                <td>{formato}</td>
                <td>R$ {valor},00</td>
                <td>
                  <Link
                    role="button"
                    to={`/update/${id}`}
                  >
                    <button className={S.btn}>
                      <RiEdit2Fill />
                    </button>
                  </Link>

                  <button
                    className={S.btn}
                    onClick={() => {
                      abrirModal(id);
                    }}
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </td>
              </tr>
      
      <ModalDeleteLivros
        open={openDelete}
        onClose={fecharModal}
        deletaLivros={deletarLivro}
        idLivro={idLivro}
      />
  </>
  );
};

export default Table;
