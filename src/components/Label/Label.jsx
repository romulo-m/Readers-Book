import React from 'react'

const Label = ({style, htmlFor, texto, className}) => {
  return (
    <label className={className} style={style} htmlFor={htmlFor}>{texto}</label>
  )
}

export default Label