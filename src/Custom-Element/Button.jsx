import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`${className} bg-yellow-500 text-white`}>
        {children}
    </button>
  )
}

export default Button