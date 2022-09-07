import { Modal, requirePropFactory } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { RiEdit2Fill, RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {estoqueGet, livrosDelete, updateBook} from '../../service/ApiLivros'
import ModalDeleteLivros from '../Modal/ModalDeleteLivros';
import S from './Table.module.css'
import Loading from '../../components/Loading/Loading'


const Table = () => {
    const [req, setReq] = useState(0)
    const [removeLoading, setRemoveloading] = useState(true)
    const [table, setTable] = useState([])
    const [idLivro, setIdLivro] = useState()
    const [openDelete, setOpenDelete] = useState(false);
    
    
    

    async function getLivros() {
        try {
            const response = await estoqueGet()
            setTimeout(() => {
                setRemoveloading(true)
                setTable(response)
            },3000)
            
        } catch (e) {
            return e.message
        }
        
    }
    
    
    async function deletarLivro() {
        try {
            const response = await livrosDelete(idLivro)
            console.log(response)
            fecharModal()
            
            
            setReq(req + 1)
        } catch (e) {
            return e.message
        }
    }
    
    
    
    function abrirModal(id) {
        setIdLivro(id)
        setOpenDelete(true);
    } 
    
    
    function fecharModal() {
        setOpenDelete(false);
    }
    
    
    
    useEffect(() => {
        setRemoveloading(false)
    },[])
    
    useEffect(() => {
        getLivros()
    },[req])
    
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
            
            {table && table.map((item, index) => {
                return (
                    <tr key={index}>
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
                        
                        <button className={S.btn} onClick={()=>{
                            abrirModal(item.idLivro)
                        }
                        
                        
                    }><RiDeleteBin6Fill /></button>
                    </td>
                </tr>
            )
        })}
        </tbody>
        <ModalDeleteLivros
        open={openDelete}
        onClose={fecharModal}
        deletaLivros={deletarLivro}
        idLivro={idLivro}
        
        />
        <div className = {S.divLoading} >
            {!removeLoading && <Loading/>}
        </div>
    </table>
    
    )
}

export default Table



// function renderRows() {
    //     return table && table.map((item, index) => {
        //         return (
            //             <tr key={index}>
            //                 <td className={S.linha}>{item.idLivro}</td>
            //                 <td className={S.linha}>{item.titulo}</td>
            //                 <td className={S.linha}>{item.formato}</td>
            //                 <td className={S.linha}>R$ {item.valor},00</td>
            //                 <td className={S.linha}>
            //                 <Link 
            //                     className={S.btn}
            //                     role="button"
            //                     to = {`/update/${item.idLivro}`}
            //                     >
            
            //                     <button className={S.btn}><RiEdit2Fill /></button>
            //                 </Link>
            
            //                     <button className={S.btn} onClick={abrirModal(item.idLivro)}><RiDeleteBin6Fill /></button>
            //                 </td>
            //             </tr>
            //         )
            //     })
            // }
            
            
            // const results = table.filter((item) => {
            //     if (value === '') {
            //         return item;
            //     } else if (item.titulo.toLowerCase().includes(value.toLowerCase())) {
            //         return item;
            //     }
            // });
                

            // async function atualizarLivro(id) {
            //     try {
            //         const response = await updateBook()
            //         console.log(response)
            //     } catch (e) {
            //         return e.message
            //     }
            // }