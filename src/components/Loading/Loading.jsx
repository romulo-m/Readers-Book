import React from 'react'
import S from './Loading.module.css'

const Loading = () => {
  return (
    <div className={S.container}>
         <div className={S.spinner}></div>
    </div>
  )
}

export default Loading