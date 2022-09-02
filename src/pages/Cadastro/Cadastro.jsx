import React from 'react'
import Button from '../../components/Button/Button'
import Label from '../../components/Label/Label'
import Input from '../../components/Input/Input'
import S from './Cadastro.module.css'
import Axios from 'Axios'
const Cadastro = () => {
  const api = Axios.create({
    baseURL: 'https://olimpia-api.herokuapp.com',
  });
  const res = {
    titulo: "ergtr",
    autor: "wrefawrf",
    genero: "ergser",
    formato: "erseg",
    valor: 12,
    idioma: " wrr",
    numeroPaginas: 45
  }
  function createPost(e) {
    e.preventDefault()
    api
      .post('/livros', res)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div className = {S.body}>
    <header className ={S.header}>
        <h1 className = {S.h1}>Criar cadastro</h1>
        <div className={S.usrimg}></div>
    </header>
        <hr className = {S.hr}/>
    <form action="" className = {S.form}>
        <article className = {S.article}>
          <div className = {S.imgDiv}></div>
        <Button style ={S.button} onClick={createPost} texto ={"Cadastrar"}/>
        <Button style ={S.button} texto ={"Voltar"}/>
        </article>
        <fieldset className = {S.fieldset} >
            <Label style = {{textAlign: "left"}} texto = {"Nome do Produto"}/>
            <Input style ={S.input}/>
            <Label style = {{textAlign: "left"}} texto = {"Quantidade"}/>
            <Input  style ={S.input}/>
            <Label style = {{textAlign: "left"}} texto = {"Fornecedor"}/>
            <Input style ={S.input}/>
        </fieldset>
    </form>

    </div>
  )
}

export default Cadastro