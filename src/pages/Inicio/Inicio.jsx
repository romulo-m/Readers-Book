import React from "react";
import Button from "../../components/Button/Button";
import HomeCard from "../../components/HomeCard/HomeCard";
import S from "./Inicio.module.css";
import Footer from "../../components/Footer/Footer";
import livros from "../../assets/livros.jpg";

const Inicio = () => {
  return (
    <div className={S.containerall}>
      <div className={S.containertext}>
        <h1>Reader's Book</h1>
        <h2>Otimize operações</h2>
        <p>
          <b>Reader's Book</b> é o sistema mais intuitivo de gerenciamento de
          livrarias do mercado
        </p>
        <Button texto="Comece agora" style={S.btn} />
      </div>
      <h3 className={S.vantagens}>Nossas vantagens</h3>
      <div className={S.gridcontainer}>
        <HomeCard
          titulo="Controle de Estoque"
          descricao="Organize seu estoque de mercadorias, supervisionando as entradas e saídas de forma impecável."
        />
        <HomeCard
          titulo="Orçamento e Vendas"
          descricao="Para vender produto ou prestar serviço, o orçamento ideal aumenta seu profissionalismo para fechar propostas."
        />
        <HomeCard
          titulo="Atendimentos"
          descricao="Organize as demandas internas de sua empresa gerenciando as filas de atendimentos de seus clientes facilitando ainda mais a produtividade de seus negócios"
        />
      </div>
      <div className={S.imagemDiv}>
        <img src={livros} className={S.img}></img>
        <p className={S.texto}>
          Livrarias são espaço para a cultura, o entretenimento e a informação.
          <br />
          O gerenciamento desse tipo de estabelecimento é algo com relativo grau
          de complexidade, para facilitar a vida dos empresários o sistema
          oferece um moderno e prático programa para livrarias.
        </p>
      </div>
      <h4 className={S.vantagens}>Quem somos</h4>
      <div className={S.about}>
        <HomeCard titulo={"André Siqueira"} descricao={"Gestão de gente"}/>
        <HomeCard titulo={"Rômulo Miranda"} descricao={"Gestão de conhecimento"}/>
        <HomeCard titulo={"João Pedro Moura"} descricao={"Co-facilitador"}/> 
        <HomeCard titulo={"Beatriz Mioranza"} descricao={"Colaboradora"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
