import React from 'react'

function ChatMessage({name, message}) {
  return (
    <div className='flex items-center shadow-md'>
       <img className="h-10" src="https://iconape.com/wp-content/png_logo_vector/user-circle.png" alt="user" />
       <span className='font-bold px-2'>{name}</span>
       <span>{message}</span>
    </div>
  )
}

export default ChatMessage
