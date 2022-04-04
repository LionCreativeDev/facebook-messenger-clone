import React from 'react'

function Message({message}) {
  return (
    <h4>{`${message.name}: ${message.message}`}</h4>
  )
}

export default Message