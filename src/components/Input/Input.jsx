import React from 'react'

const Input = ({style, type, placeholder, value, onChange}) => {
  return (
    <input className={style} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default Input