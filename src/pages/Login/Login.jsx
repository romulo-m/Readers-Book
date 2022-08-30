import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import S from "./Login.module.css"

const Login = () => {
  return (
    <section className={S.container}>
      <h2>Área de login</h2>
      <form className={S.forms}>
        <Label style={S.label} texto={'Usuário'}/>
        <Input style={S.input} type={'text'} placeholder={'Digite seu usuário'}/>
        <Label style={S.label} texto={'Digite sua senha'}/>
        <Input style={S.input} type={'text'} placeholder={'********'}/>
        <Button className={S.btn} texto={'Entrar'} />
      </form>
    </section>
  )
}

export default Login