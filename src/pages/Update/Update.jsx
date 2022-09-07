import React from 'react'
import Button from '../../components/Button/Button'
import Label from '../../components/Label/Label'
import Input from '../../components/Input/Input'
import {getLivroId, updateBook} from '../../service/ApiLivros'
import {useState, useEffect} from "react"
import { useNavigate, useParams } from 'react-router-dom'
import S from './Update.module.css'

const Update = () => {

const navigate = useNavigate()
const {id} = useParams()
const [res, setRes] = useState ('');

  const handleChange = (target, key) => {
    const value = target.value
    setRes({...res, [key]: value})
  }

  const handleChangeNum = (target, key) => {
    const value = target.valueAsNumber
    setRes({...res, [key]: value})
  }

  function editLivro(e) {
    e.preventDefault()
    updateBook(res, id)
    navigate('/dashboard')
    
  }

  async function handleReq() {    
    const response  = await getLivroId(id)
    setRes({
          titulo: response.titulo,
          autor: response.autor,
          genero: response.genero,
          formato: response.formato,
          valor: response.valor,
          idioma: response.idioma,
          numeroPaginas: response.numeroPaginas
  }) 
}

  useEffect(() => {
    handleReq()
  }, [])

  return (
    <div className = {S.body}>
    <header className ={S.header}>
        <h1 className = {S.h1}>Editar Livro</h1>
        <div className={S.usrimg}></div>
    </header>
    <hr className = {S.hr}/>
    <form action="" className = {S.form} >
        <fieldset className = {S.fieldset} >
            <Label className={S.label} texto = {"Titulo"} />
            <Input type={"text"} style ={S.input} value={res.titulo} onChange={({target}) => handleChange(target, "titulo")}/>
            <Label className={S.label} texto = {"Autor"} />
            <Input type={"text"} style ={S.input} value={res.autor} onChange={({target}) => handleChange(target, "autor")}/>
            <Label className={S.label} texto = {"Genero"}/>
            <Input type={"text"} style ={S.input} value={res.genero} onChange={({target}) => handleChange(target, "genero")}/>
            <Label className={S.label} texto = {"Gormato"}/>
            <Input type={"text"} style ={S.input} value={res.formato} onChange={({target}) => handleChange(target, "formato")}/>
            <Label className={S.label} texto = {"Valor"}/>
            <Input type={"number"} style ={S.input} value={res.valor} onChange={({target}) => handleChangeNum(target, "valor")}/>
            <Label className={S.label} texto = {"Idioma"}/>
            <Input type={"text"} style ={S.input} value={res.idioma} onChange={({target}) => handleChange(target, "idioma")}/>
            <Label className={S.label} texto = {"Numero de Paginas"}/>
            <Input type={"number"} style ={S.input} value={res.numeroPaginas} onChange={({target}) => handleChangeNum(target, "numeroPaginas")}/>
            <div className={S.divBtn}>
            <Button style ={S.button}  texto ={"Editar"} onClick={editLivro}/>
            <Button style ={S.button} texto ={"Voltar"} onClick={() => navigate('/dashboard')}/>
            </div>
        </fieldset>
    </form>


</div>
)
}

export default Update