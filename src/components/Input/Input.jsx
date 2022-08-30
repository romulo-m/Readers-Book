import React from 'react'

const Input = ({style, type, placeholder, value}) => {
  return (
    <input className={style} type={type} placeholder={placeholder} value={value}/>
  )
}

export default Input