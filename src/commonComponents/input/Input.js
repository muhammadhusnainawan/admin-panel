import React from 'react'
import "./Input.css";

function Input({text,type,height}) {
  return (
    <div  className='input'><input style={{height: height}} type={type} placeholder={text} />
    
    </div>
  )
}

export default Input