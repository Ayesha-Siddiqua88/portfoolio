import React from 'react'
import { SiCss3, SiExpress, SiFirebase, SiGo, SiGooglecloudstorage, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiStreamlit, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-hover'

export default function Projects() {
    const projects=[
        {
            title:"Attendex",
            tech:[SiHtml5, SiCss3, SiJavascript, SiFirebase],
            link:"https://attendexx.netlify.app/",
            cover:"/project1.png",
            background:"bg-indigo-500"
        },
        {
            title:"MemeItUp",
            tech:[SiReact],
            link:"https://meme-it-up.vercel.app/",
            cover:"/memer.png",
            background:"bg-red-600"
        },
        {
            title:"Pinterest Clone",
            tech:[ SiJavascript,SiTailwindcss,SiNodedotjs, SiExpress,SiMongodb],
            link:"https://github.com/Ayesha-Siddiqua88/Memer",
            cover:"/project2.png",
            background:"bg-blue-500"
        },
        {
            title:"Health Pilot",
            tech:[SiPython,SiStreamlit,SiGooglecloudstorage],
            link:"https://github.com/Ayesha-Siddiqua88/Health-Pilot",
            cover:"/project4.png",
            background:" bg-red-300"
        },
        {
            title:"IEEE SPS Website",
            tech:[SiReact, SiTailwindcss],
            link:"https://drive.google.com/file/d/1ZBxTIm7tNogcOU2b7vT8VRQHfZTs2_Hc/view?usp=sharing",
            cover:"/sps.png",
            background:" bg-green-600"

        }
    
    
    ]
    
return (
    <div className='py-10 p-5 sm:p-0'>
        <Title className='text-3xl flex flex-col items-center justify-center' text="Projects 🗂️"/>

      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project,index) =>{
            return(
                <Link href={project.link} key={index}>
                    <div className={cn(
                        "p-2 rounded-sm lg:p-3 lg:rounded-md",
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