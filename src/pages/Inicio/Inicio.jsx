import React from "react";
import Button from "../../components/Button/Button";
import HomeCard from "../../components/HomeCard/HomeCard";
import S from "./Inicio.module.css";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import perfilbia from "../../assets/perfilbia.jpg";

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className={S.containerall}>
      <header className={S.header}>
        <img src={logo} alt="logo" className={S.logo} />
      </header>
      <div className={S.containertext}>
        <h1>Otimize operações</h1>
        <p>
          <b>Reader's Book</b> é o sistema mais intuitivo de gerenciamento de
          livrarias do mercado
        </p>
        <Button
          texto="Comece agora"
          style={S.btn}
          onClick={() => navigate("/dashboard")}
        />
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
      <div className={S.textoDiv}>
        <h4 className={S.texto}>
          Livrarias são espaço para a cultura, o entretenimento e a informação
        </h4>
      </div>
      <h4 className={S.h4}>Quem somos</h4>
      <div className={S.aboutD}>
        <div className={S.about}>
          <img src={perfilbia} alt="" className={S.fotoperfil} />
          <div className={S.container}>
            <h4>
              <b>Beatriz Mioranza</b>
            </h4>
            <p>Colaboradora</p>
          </div>
        </div>
        <div className={S.about}>
          <img src={logo} alt="" className={S.fotoperfil} />
          <div className={S.container}>
            <h4>
              <b>André Siqueira</b>
            </h4>
            <p>Gestão de gente</p>
          </div>
        </div>
        <div className={S.about}>
          <img src={logo} alt="" className={S.fotoperfil} />
          <div className={S.container}>
            <h4>
              <b>Rômulo Miranda</b>
            </h4>
            <p>Gestão de conheciamento</p>
          </div>
        </div>
        <div className={S.about}>
          <img src={logo} alt="" className={S.fotoperfil} />
          <div className={S.container}>
            <h4>
              <b>João Pedro de Moura</b>
            </h4>
            <p>Co-facilitador</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
