import React from 'react'

const Button = ({style, texto, onClick }) => {
  return (
    <button style={style} onClick={onClick} >{texto}</button>
  )
}

export default Button