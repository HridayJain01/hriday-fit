import React from 'react'

export default function Button(props) {
  const {text,func}=props
  return (
    <button onClick={func} className='px-8 py-4 rounded-md border-blue-400 border-solid border-[2px] blueShadow duration-200'>
          <p>{text}</p>
    </button>
  )
}
