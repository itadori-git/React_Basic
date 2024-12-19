import React from 'react'

function Button(props) {
    const {name} = props
  return (
    <div>
      <button>{name}</button>
    </div>
  )
}

export default Button
