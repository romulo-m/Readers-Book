import React from 'react'

const Button = ({ style, texto, onClick }) => {
  return (
    <button className={style} onClick={onClick} >{texto}</button>
  )
}

export default Button