import React from 'react'
import Button from '../../components/Button/Button'
import S from './Inicio.module.css'

const Inicio = () => {
  return (
    <div>
      <div className={S.containertext}>
      <h1>Otimize</h1>
      <h2>operações</h2>
      <p><b>Reader's Book</b> é o sistema mais intuitivo de gerenciamento de livrarias do mercado</p>
      <Button texto="Comece agora"/>
      </div>
      <div>
        {/* Grid de cards explicando o produto */}
      </div>
      <div>
        {/* Texto com instruções sobre o produto e imagem */}
      </div>
    </div>
  )
}

export default Inicio