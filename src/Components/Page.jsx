import React from 'react'
import Header from './Header'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import Projects from './Projects'

const Page = () => {
  return (
    <div>
        {/* Header section */}
        <section id='header' className='adjust bg-[#081C29]'>
            <Header />
        </section>

        {/* About section */}
        <section id='about' className='adjust bg-[#0D2D43]'>
            <About />
        </section>

        {/* Education section */}
        <section id='education' className='adjust bg-[#081C29]'>
           <Education />
        </section>
        
        {/* Skills section */}
        <section id='skills' className='adjust bg-[#0D2D43]'>
           <Skills />
        </section>

        {/* Projects section */}
        <section id='projects' className='adjust bg-[#081C29]'>
           <Projects />
        </section>
       
        {/* Contact section */}
        <section id='contact' className='adjust bg-[#0D2D43]'>
           <Contact />
        </section>
       
        {/* Footer section */}
        <section className='bg-[#081C29]'>
           <Footer />
        </section>
    </div>
  )
}

export default Page