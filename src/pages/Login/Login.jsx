import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import S from "./Login.module.css"
import bookshelf from '../../assets/bookshelf.jpg'

const Login = () => {
  return (
    <section className={S.container}>
      <form className={S.forms}>
        <h1>Login</h1>
        <div className={S.inputsection}>
        <Label style={S.label} texto={'Usuário'}/>
        <Input style={S.input} type={'text'}/>
        </div>
        <div className={S.inputsection}>
        <Label style={S.label} texto={'Senha'}/>
        <Input style={S.input} type={'text'} placeholder={'********'}/>
        </div>
        <Button style={S.btn} texto={'Entrar'} />
      </form>
      <img src={bookshelf} className={S.img}></img>
    </section>
  )
}

export default Login