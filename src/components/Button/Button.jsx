import React from 'react'

const Button = ({ style, texto, onClick, type, submit }) => {
  return (
    <button className={style} onClick={onClick} type={type} >{texto}</button>
  )
}

export default Button