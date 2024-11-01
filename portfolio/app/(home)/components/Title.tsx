
import React from 'react'

export default function Title({text,className}:{text:string,className?:string}) {
  return (
    <div className={className}>
        <h1 className='font-bold group-hover:text-blue-700 transition-all'>{text}</h1>
        <div className='w-40 h-1 bg-blue-800 rounded-full'></div>
        <div></div>
    </div>
  )
}
