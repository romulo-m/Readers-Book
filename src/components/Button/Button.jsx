import React from 'react'

const Button = ({className, style, texto, onClick }) => {
  return (
    <button className={className} style={style} onClick={onClick} >{texto}</button>
  )
}

export default Button