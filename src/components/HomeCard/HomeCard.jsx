import React from 'react'
import style from './HomeCard.module.css'

const HomeCard = ({titulo, img, descricao}) => {
  return (
    <div className={style.card}>
        <h2 className={style.titulo}>{titulo}</h2>
        <img className={style.imagemIcon} src={img}></img>
        <p className={style.descricao}>{descricao}</p>
    </div>
  )
}

export default HomeCard