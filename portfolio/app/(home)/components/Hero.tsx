import { Moving } from '@/components/ui/moving'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function HeroSection() {
  return (
    <div className='flex items-center flex-col-reverse lg:flex-row justify-between min-h-[60vh] lg:gap-96 gap-12 animation-move-up'>
        <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7xl font-bold'>Hello👋🏼 <br/> 
        <span className='underline underline-offset-8 decoration-blue-800'>{"I'm Ayesha"}</span></h1>
        <p className='md:w-96 text-lg text-gray-300'>
            {"Based in India, I'm a passionate ML Engineer. I love to build machine learning models."}
        </p>
        
        <Link href={"mailto:ayeshasiddiqua.connects@gmail.com"} className='inline-block group'>
            <Title className='text-2xl' text="Contact Me 📭"/>
        </Link>
        <Link href="/MyCV.png" className='inline-block group' passHref>
            <Title className='text-2xl left-2' text="Resume 📁"/>
        </Link>
        </div>

        <div className='w-72 h-45 mt-40 ml-24 lg:mt-0 lg:ml-0'>
            <div >
               <img src='githubprofile.jpg' className='glow' alt='image' />
            </div>
            <Moving>
                <p>Available for work</p>
            </Moving>
        </div>
    </div>
  )
}
