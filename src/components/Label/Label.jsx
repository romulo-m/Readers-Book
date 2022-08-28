import React from 'react'

const Label = ({style, texto}) => {
  return (
    <label style={style} htmlFor={texto}>{texto}</label>
  )
}

export default Label