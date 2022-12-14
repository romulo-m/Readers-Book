import React, { useState } from "react";
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ModalAddLivros from "../../components/Modal/ModalAddLivros";
import SideMenu from "../../components/SideMenu/SideMenu";
import Table from "../../components/Table/Table";
import { estoqueGet } from "../../service/ApiLivros";
import S from "./PainelAdmin.module.css";



const PainelAdmin = () => {
  const [titulo, setTitulo] = useState("");
  const [table, setTable] = useState([]);
  const [atualizarTela, setAtualizarTela] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const results = table.filter((item) => {
      if (titulo === '') {
          return item;
      } else if (item.titulo.toLowerCase().includes(titulo.toLowerCase())) {
          return item;
      }
    });

  async function requisicao() {
    const response = await estoqueGet();
    setTable(response);
  }

  function handleAtualizaTela() {
    setAtualizarTela(true);
  }

  function handleChange(e) {
    const value = e.target.value;
    setTitulo(value);
  }

  useEffect(() => {
    requisicao();
  }, []);

  useEffect(() => {
    if (atualizarTela === true) {
      requisicao();
      setAtualizarTela(false);
    }
  }, [atualizarTela]);

  return (
    <>
    <SideMenu />
    <div className={S.main}>
      <header className={S.header}>
        <h1 className={S.headerh1}>Dashboard</h1>
      </header>
      <div className={S.topActions}>
        <Input
          type="text"
          style={S.searchbar}
          value={titulo}
          onChange={handleChange}
          placeholder="Buscar"
        />
        <Button texto="Adicionar" onClick={handleOpen} style={S.btnCriar} />
      </div>
      <section className={S.content}>
        <h2>Gerenciamento de Produtos</h2>
        <table className={S.table}>
          <thead className={S.head}>
            <tr className={S.row}>
              <th className={S.titulo}>ID</th>
              <th className={S.titulo}>Titulo</th>
              <th className={S.titulo}>Formato</th>
              <th className={S.titulo}>Valor</th>
              <th className={S.titulo}>A????es</th>
            </tr>
          </thead>
          <tbody className={S.body}>
            {table.length > 0 &&
              results.map((item, i) => {
                return (
                  <Table
                    key={item.idLivro}
                    id={item.idLivro}
                    titulo={item.titulo}
                    formato={item.formato}
                    valor={item.valor}
                    handleAtualizaTela={handleAtualizaTela}
                  />
                );
              })}
          </tbody>
        </table>
      </section>
      <ModalAddLivros open={open} onClose={handleClose} handleAtualizaTela={handleAtualizaTela}/>
    </div>
  </>
  );
  
};

export default PainelAdmin;
