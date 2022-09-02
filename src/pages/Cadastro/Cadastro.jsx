import React from 'react'
import Button from '../../components/Button/Button'
import Label from '../../components/Label/Label'
import Input from '../../components/Input/Input'
import S from './Cadastro.module.css'
const Cadastro = () => {
  return (
    <div className = {S.body}>
    <header className ={S.header}>
        <h1 className = {S.h1}>Atualização de cadastro</h1>
        <div className={S.usrimg}></div>
    </header>
        <hr className = {S.hr}/>
    <form action="" className = {S.form}>
        <article className = {S.article}>
          <div className = {S.imgDiv}></div>
        <Button style ={S.button} texto ={"Atualizar"}/>
        <Button style ={S.button} texto ={"Voltar"}/>
        </article>
        <fieldset className = {S.fieldset} >
            <Label style = {{textAlign: "left"}} texto = {"Nome do Produto"}/>
            <Input style ={S.input}/>
            <Label style = {{textAlign: "left"}} texto = {"Quantidade"}/>
            <Input style ={S.input}/>
            <Label style = {{textAlign: "left"}} texto = {"Fornecedor"}/>
            <Input style ={S.input}/>
        </fieldset>
    </form>

    </div>
  )
}

export default Cadastro