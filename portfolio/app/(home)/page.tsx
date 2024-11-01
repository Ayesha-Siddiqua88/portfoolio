
import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='min-h-screen bg-black  overflow-hidden '>
        <div className='dark:bg-black dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
            <div className='max-w-7xl mx-auto p-5'>
              <Navbar/>
              <Hero/>
            </div>
            <div 
            className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left0-0 xl:-bottom-14 w-full'>
            </div>
        </div>

        <div className='max-w-full mx-auto p-5 mt-20 dark:bg-black dark:bg-grid-white/[0.04] bg-grid-black/[0.2]'>
        <Skills/>
        </div>

        <div className='max-w-7xl mx-auto p-5'>
        <Projects/>
        <Footer/>
        </div>
        
        </div>
      
    </Suspense>
  )
}
function Loading() {
  return <h2 className=' flex justify-center items-center relative top-80'>🌀 Loading...</h2>;
}
