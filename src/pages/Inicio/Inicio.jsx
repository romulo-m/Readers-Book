import React from 'react'
import Button from '../../components/Button/Button'
import HomeCard from '../../components/HomeCard/HomeCard'
import S from './Inicio.module.css'

const Inicio = () => {
  return (
    <div className={S.containerall}>
      <div className={S.containertext}>
      <h1>Otimize</h1>
      <h2>operações</h2>
      <p><b>Reader's Book</b> é o sistema mais intuitivo de gerenciamento de livrarias do mercado</p>
      <Button texto="Comece agora" style={S.btn}/>
      </div>
      <h3>Nossas vantagens</h3>
      <div className={S.gridcontainer}>
        {/* Grid de cards explicando o produto */}
        <HomeCard titulo='Lorem ipsum' descricao='Lorem ipsum dolor bla bla'/>
        <HomeCard titulo='Lorem ipsum' descricao='Lorem ipsum dolor bla bla'/>
        <HomeCard titulo='Lorem ipsum' descricao='Lorem ipsum dolor bla bla'/>
      </div>
      <div>
        {/* Texto com instruções sobre o produto e imagem */}
      </div>
    </div>
  )
}

export default Inicio