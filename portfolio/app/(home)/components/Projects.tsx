import React from 'react'
import { SiCss3, SiExpress,SiOpencv, SiFirebase, SiGo, SiMediafire, SiGooglecloudstorage, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiStreamlit, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-hover'

export default function Projects() {
    const projects=[
        {
            title:"Health Pilot",
            tech:[SiPython,SiStreamlit,SiGooglecloudstorage],
            link:"https://github.com/Ayesha-Siddiqua88/Health-Pilot",
            cover:"/project4.png",
            background:" bg-orange-600"
        },
        {
            title:"Attendex",
            tech:[SiHtml5, SiCss3, SiJavascript, SiFirebase],
            link:"https://attendexx.netlify.app/",
            cover:"/project1.png",
            background:"bg-indigo-500"
        },
        {
            title:"Gesture-controlled Drawing App",
            tech:[SiPython, SiOpencv, SiMediafire],
            link:"https://attendexx.netlify.app/",
            cover:"/opencv.png",
            background:"bg-indigo-950"
        },
        {
            title:"Pinterest Clone",
            tech:[SiJavascript,SiTailwindcss,SiNodedotjs, SiExpress,SiMongodb],
            link:"https://github.com/Ayesha-Siddiqua88/Pinterest_Clone",
            cover:"/project2.png",
            background:"bg-pink-950"
        },
        {
            title:"Memer",
            tech:[SiReact],
            link:"https://github.com/Ayesha-Siddiqua88/Memer",
            cover:"/project3.png",
            background:"bg-blue-500"
        },
    ]
    
return (
    <div className='py-10 p-5 sm:p-0 lg:mt-28'>
        <Title className='text-3xl flex flex-col items-center justify-center' text="Projects 🗂️"/>

      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project,index) =>{
            return(
                <Link href={project.link} key={index}>
                    <div className={cn(
                        "p-5 rounded-md",
                        project.background
                    )}
                    > 
                        <DirectionAwareHover 
                            imageUrl={project.cover}
                            className='w-full space-y-5 cursor-pointer'
                        >
                            <div className='space-y-5'>
                            <h1 className='text-2xl font-bold'>{project.title}</h1>
                            <div className='flex items-center gap-5'>
                                {project.tech.map((Icon,index) => {
                                    return <Icon className='w-8 h-8' key={index}/>
                                })}
                            </div>
                            </div>
                        </DirectionAwareHover>
                    </div>    
                </Link>
        )
        })}
        </div>
    </div>
);
}
