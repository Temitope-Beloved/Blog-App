import React from 'react'

const Input = ({type='text', placeholder, children, className, size, name, id }) => {
  return (
   <>
   <input type={type} placeholder={placeholder} children={children} className={`${className} border-2 rounded-md p-2 block`} autoComplete='on' name={name} id={id}/>
   </>
  )
}

export default Input