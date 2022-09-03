import React from 'react'
import Button from '../../components/Button/Button'
import Label from '../../components/Label/Label'
import Input from '../../components/Input/Input'
import S from './Cadastro.module.css'
import {livrosPost} from '../../service/ApiLivros'
import {useState} from "react"

const Cadastro = () => {
    const [res, setRes] = useState ({
    titulo: "",
    autor: "",
    genero: "",
    formato: "",
    valor: "",
    idioma: " ",
    numeroPaginas: ""
  });

  const handleChange = (target, key) => {
    const value = target.value
    setRes({...res, [key]: value})
  }

  const handleChangeNum = (target, key) => {
    const value = target.valueAsNumber
    setRes({...res, [key]: value})
  }

  function createPost(e) {
    e.preventDefault()
    livrosPost(res)
    
  }

  return (
    <div className = {S.body}>
    <header className ={S.header}>
        <h1 className = {S.h1}>Criar cadastro</h1>
        <div className={S.usrimg}></div>
    </header>
        <hr className = {S.hr}/>
    <form action="" className = {S.form} >
        <article className = {S.article}>
          <div className = {S.imgDiv}></div>
        <Button style ={S.button}  texto ={"Cadastrar"} onClick={createPost}/>
        <Button style ={S.button} texto ={"Voltar"}/>
        </article>
        <fieldset className = {S.fieldset} >
            <Label style = {{textAlign: "left"}} texto = {"titulo"} />
            <Input type={"text"} style ={S.input} value={res.titulo} onChange={({target}) => handleChange(target, "titulo")}/>
            <Label style = {{textAlign: "left"}} texto = {"autor"} />
            <Input type={"text"} style ={S.input} value={res.autor} onChange={({target}) => handleChange(target, "autor")}/>
            <Label style = {{textAlign: "left"}} texto = {"genero"}/>
            <Input type={"text"} style ={S.input} value={res.genero} onChange={({target}) => handleChange(target, "genero")}/>
            <Label style = {{textAlign: "left"}} texto = {"formato"}/>
            <Input type={"text"} style ={S.input} value={res.formato} onChange={({target}) => handleChange(target, "formato")}/>
            <Label style = {{textAlign: "left"}} texto = {"valor"}/>
            <Input type={"number"} style ={S.input} value={res.valor} onChange={({target}) => handleChangeNum(target, "valor")}/>
            <Label style = {{textAlign: "left"}} texto = {"idioma"}/>
            <Input type={"text"} style ={S.input} value={res.idioma} onChange={({target}) => handleChange(target, "idioma")}/>
            <Label style = {{textAlign: "left"}} texto = {"numeroPaginas"}/>
            <Input type={"number"} style ={S.input} value={res.numeroPaginas} onChange={({target}) => handleChangeNum(target, "numeroPaginas")}/>
        </fieldset>
    </form>

    </div>
  )
}

export default Cadastro