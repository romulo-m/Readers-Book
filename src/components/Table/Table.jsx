import React, { useEffect, useState } from 'react'
import { RiEdit2Fill, RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {estoqueGet, livrosDelete, updateBook} from '../../service/ApiLivros'
import S from './Table.module.css'


const Table = () => {

    const [table, setTable] = useState([])

    // const results = table.filter((item) => {
    //     if (value === '') {
    //         return item;
    //     } else if (item.titulo.toLowerCase().includes(value.toLowerCase())) {
    //         return item;
    //     }
    // });

    async function getLivros() {
        try {
            const response = await estoqueGet()
            setTable([...table, ...response])
        } catch (e) {
            return e.message
        }
        
    }

    // async function atualizarLivro(id) {
    //     try {
    //         const response = await updateBook()
    //         console.log(response)
    //     } catch (e) {
    //         return e.message
    //     }
    // }

    async function deletarLivro(id) {
        try {
            const response = await livrosDelete(id)
            console.log(response)
        } catch (e) {
            return e.message
        }
    }

    useEffect(() => {
        getLivros()
    },[])
    
    

    function renderRows() {
        return table && table.map(item => {
            return (
                <tr key={item.idLivro}>
                    <td className={S.linha}>{item.idLivro}</td>
                    <td className={S.linha}>{item.titulo}</td>
                    <td className={S.linha}>{item.formato}</td>
                    <td className={S.linha}>R$ {item.valor},00</td>
                    <td className={S.linha}>
                    <Link 
                        className={S.btn}
                        role="button"
                        to = {`/update/${item.idLivro}`}
                        >

                        <button className={S.btn}><RiEdit2Fill /></button>
                    </Link>
                        
                        <button className={S.btn} onClick={() => deletarLivro(item.idLivro)}><RiDeleteBin6Fill /></button>
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
                <th className={S.titulo}>Formato</th>
                <th className={S.titulo}>Valor</th>
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


