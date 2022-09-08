import React, { useState, useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import S from "./Login.module.css";
import bookshelf from "../../assets/bookshelf.jpg";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const initialState = { user: "", password: "" };

function acessLogin({ user, password }) {
  if (user === "admin" && password === "123456") {
    return true;
  } else {
    return false;
  }
}
const Login = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(UserContext);
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
    console.log(token);
    if (token) {
      navigate("/home");
    } else {
      setValues(initialState);
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
            defaultValue={values.user}
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
            defaultValue={values.password}
          />
        </div>
        <Button style={S.btn} texto={"Entrar"} onClick={submit} />
      </form>
      <img src={bookshelf} className={S.img}></img>
    </section>
  );
};

export default Login;
