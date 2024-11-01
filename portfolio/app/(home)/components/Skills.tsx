
"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover'
import { SiExpress,SiCplusplus, SiFirebase, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'

export default function Skills() {
    const skills=[
        {
            text:"React",
            Icon: SiReact,
        },
        {
            text:"Tailwindcss",
            Icon: SiTailwindcss,
        },
        {
            text:"Python",
            Icon: SiPython,
        },
        {
            text:"Express.js",
            Icon: SiExpress,
        },
        {
            text:"MongoDB",
            Icon: SiMongodb,
        },
        {
            text:"Node.js",
            Icon: SiNodedotjs,
        },
        {
            text:"Firebase",
            Icon: SiFirebase,
        },
        {
            text:"Javascript",
            Icon: SiJavascript,
        },
        {
            text:"C++",
            Icon: SiCplusplus,
        }
        
    ]
  return (
    <div className='max-w-5xl mx-auto px-8 lg:pt-8'>
        <Title 
        text="Skills 🛠️"
        className='text-3xl flex flex-col items-center justify-center'
        />

        <HoverEffect items={skills}/>

    </div>
  )
}
