import React from 'react'
import { RiEdit2Fill, RiDeleteBin6Fill } from "react-icons/ri";
import S from './Table.module.css'


const Table = () => {

    const estoque = [{
        "idEstoque": 101,
        "produto": "Livro um",
        "quantidade": 202,
        "fornecedor": "Editora Insitrica"
    },
    {
        "idEstoque": 102,
        "produto": "Livro dois",
        "quantidade": 502,
        "fornecedor": "Catavento"
    },
    {
        "idEstoque": 103,
        "produto": "Livro tres",
        "quantidade": 102,
        "fornecedor": "Porta de Trás"
    },
    {
        "idEstoque": 104,
        "produto": "Livro quatro",
        "quantidade": 303,
        "fornecedor": "Editora Devinho"
    },
    {
        "idEstoque": 105,
        "produto": "Livro cincto",
        "quantidade": 507,
        "fornecedor": "Editora Perry"
    }]

    function renderRows() {
        return estoque.map(item => {
            return (
                <tr key={item.idEstoque}>
                    <td className={S.linha}>{item.idEstoque}</td>
                    <td className={S.linha}>{item.produto}</td>
                    <td className={S.linha}>{item.quantidade}</td>
                    <td className={S.linha}>{item.fornecedor}</td>
                    <td className={S.linha}>
                        <button className={S.btn}><RiEdit2Fill /></button>
                        <button className={S.btn}><RiDeleteBin6Fill /></button>
                    </td>
                </tr>
            )
        })
    }

  return (
    <table className={S.table}>
        <thead>
            <tr>
                <th className={S.titulo}>ID</th>
                <th className={S.titulo}>Titulo</th>
                <th className={S.titulo}>Quantidade</th>
                <th className={S.titulo}>Fornecedor</th>
                <th className={S.titulo}>Ações</th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>
    
  )
}

export default Table


