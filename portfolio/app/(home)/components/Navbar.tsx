
"use client"

import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaMedium } from "react-icons/fa";
import Link from 'next/link';
import { cn } from '@/lib/utils';


export default function Navbar({className}:{className?:string}) {

    const socials=[
        {
            link:"https://www.linkedin.com/in/ayesha-siddiqua-a13624255/",
            label:"Linkedln",
            Icon: SiLinkedin    
        },
        {
            link:"https://github.com/Ayesha-Siddiqua88/",
            label:"Github",
            Icon: SiGithub
        },
        {
            link:"https://medium.com/@ayeshasiddiqua.connects",
            label:"Medium",
            Icon: FaMedium
        }
    ]

return (
<nav className={cn('py-10 flex justify-between items-center animation-move-down',className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-700'>AyeshaSiddiqua🕸️</h1>
        <div className='flex items-center gap-8 '>
                {socials.map((social,index)=>{
                        const Icon=social.Icon
                        return <Link
                        href={social.link} 
                        key={index} 
                        aria-label={social.label}>
                            <span className="hover:underline decoration-green-500">
                            <Icon className="w-5 h-5 lg:w-6 h-6 hover:scale-125 transition-all" />
                            </span>
                        </Link>
                })}
        </div>
</nav>
)
}
