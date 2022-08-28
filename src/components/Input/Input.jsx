import React from 'react'

const Input = ({style, texto, id}) => {
  return (
    <input style={style} type={texto} placeholder='nome' id={id} />
  )
}

export default Input