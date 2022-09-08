import React, { useState, useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import S from "./Login.module.css";
import bookshelf from "../../assets/bookshelf.jpg";
import { useNavigate } from "react-router-dom";


function acessLogin({ user, password }) {
  if (user === "admin" && password === "123456") {
    return true;
  } else {
    return false;
  }
}
const Login = () => {
  const [values, setValues] = useState({ user: "", password: "" });
  const navigate = useNavigate();
  function onChange(event, name) {
    const { value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function submit(event) {
    event.preventDefault();
    const token = acessLogin(values);
    if (token) {
      navigate("/home");
    } else {
      setValues({ user: "", password: "" });
      Alert.alert('Erro de Login', 'Não foi possivel fazer o login'); 
    }
  }

  return (
    <section className={S.container}>
      <form className={S.forms}>
        <h1>Reader's Book</h1>
        <h3>Entre com seu usuário e senha</h3>
        <div className={S.inputsection}>
          <Label style={S.label} texto={"Usuário"} />
          <Input
            style={S.input}
            type={"text"}
            name={"user"}
            onChange={(event) => onChange(event, "user")}
            value={values.user}
          />
        </div>
        <div className={S.inputsection}>
          <Label style={S.label} texto={"Senha"} />
          <Input
            style={S.input}
            type={"password"}
            placeholder={"********"}
            name={"password"}
            onChange={(event) => onChange(event, "password")}
            value={values.password}
          />
        </div>
        <Button style={S.btn} texto={"Entrar"} onClick={submit} />
      </form>
      <img src={bookshelf} className={S.img}></img>
    </section>
  );
};

export default Login;
