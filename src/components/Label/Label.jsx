import React from 'react'

const Label = ({style, htmlFor, texto}) => {
  return (
    <label style={style} htmlFor={htmlFor}>{texto}</label>
  )
}

export default Label