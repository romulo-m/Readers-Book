import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import HomeCard from "../../components/HomeCard/HomeCard";
import S from "./Inicio.module.css";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import perfilbiaa from "../../assets/perfilbiaa.jpg";
import perfilandre from "../../assets/perfilandre.jpg";
import perfiljoca from "../../assets/perfiljoca.jpg";
import perfilromulo from "../../assets/perfilromulo.jpg";
import Loading from "../../components/Loading/Loading";
import controle from "../../assets/controledeestoque.png";
import atendimento from "../../assets/atendimento.png";
import orcamentos from "../../assets/orcamentos.png";

const Inicio = () => {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);
    setTimeout(()=> {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {loading ? (
        <Loading/>
      ) : (
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
          img={controle}
        />
        <HomeCard
          titulo="Orçamento e Vendas"
          descricao="Para vender produto ou prestar serviço, o orçamento ideal aumenta seu profissionalismo para fechar propostas."
          img={orcamentos}
        />
        <HomeCard
          titulo="Atendimentos"
          descricao="Organize as demandas internas de sua empresa gerenciando as filas de atendimentos de seus clientes facilitando ainda mais a produtividade de seus negócios"
          img={atendimento}
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
          <img src={perfilbiaa} alt="" className={S.fotoperfil} />
          <div className={S.container}>
            <h4>
              <b>Beatriz Mioranza</b>
            </h4>
            <p>Colaboradora</p>
          </div>
        </div>
        <div className={S.about}>
          <img src={perfilandre} alt="" className={S.fotoperfil} />
          <div className={S.container}>
            <h4>
              <b>André Siqueira</b>
            </h4>
            <p>Gestão de gente</p>
          </div>
        </div>
        <div className={S.about}>
          <img src={perfilromulo} alt="" className={S.fotoperfil} />
          <div className={S.container}>
            <h4>
              <b>Rômulo Miranda</b>
            </h4>
            <p>Gestão de conheciamento</p>
          </div>
        </div>
        <div className={S.about}>
          <img src={perfiljoca} alt="" className={S.fotoperfil} />
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
      )}
    </div>
  );
};

export default Inicio;
