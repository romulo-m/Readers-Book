import React from 'react'
import style from './HomeCard.module.css'

const HomeCard = ({titulo, img, descricao}) => {
  return (
    <div className={style.card}>
        <h1>{titulo}</h1>
        <img src={img}></img>
        <p>{descricao}</p>
    </div>
  )
}

export default HomeCard