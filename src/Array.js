import React from 'react'
import Props from './Props'
const array = () => {
  var a="PropsEg"
  var arr=["dheepan","raj"]
  return (
    <div>
      <h1>welcome</h1>
      {arr.map((name,index)=>{
        return <h2>{name}</h2>
      })}
      <Props val={a} />
    </div>
  )
}

export default array
