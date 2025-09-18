"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover'
import { SiExpress,SiCplusplus, SiFirebase, SiScikitlearn,SiTensorflow,SiMysql,SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'

export default function Skills() {
    const skills=[
        {
            text:"Python",
            Icon: SiPython,
        },
        {
            text:"C++",
            Icon: SiCplusplus,
        },
        {
            text:"Scikit-learn",
            Icon: SiScikitlearn
        },
        {
            text:"Tensorflow",
            Icon: SiTensorflow
        },
        {
            text:"MySQL",
            Icon: SiMysql
        },
        {
            text:"Javascript",
            Icon: SiJavascript,
        },
        {
            text:"React",
            Icon: SiReact,
        },
        {
            text:"Tailwindcss",
            Icon: SiTailwindcss,
        },
        {
            text:"MongoDB",
            Icon: SiMongodb,
        },
        {
            text:"Firebase",
            Icon: SiFirebase,
        }
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title 
        text="Skills 🛠️"
        className='text-3xl flex flex-col items-center justify-center'
        />

        <HoverEffect items={skills}/>

    </div>
  )
}
