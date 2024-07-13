import React from 'react';
import './index.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
         <section className='adjust items-center'>
            <h1 className='text-white text-5xl leading-snug font-bold'>Hi, I'm <span>Areeb Zeeshan</span></h1>
            <div className='text-animate text-4xl'>
                <h3>MERN Stack Developer</h3>
            </div>
            <p className='text-white w-100 md:w-9/12 py-6'>
                🚀 Hi, I'm Areeb, a passionate mern stack developer with a keen eye for clean and intuitive user interfaces.
                Leveraging my expertise in React JS, Redux, Next JS, Express JS, MongoDB and much more. I transform ideas into engaging and responsive web experiences.
                From crafting pixel-perfect designs to embracing the latest frontend technologies, I thrive on bringing creativity and
                functionality together to deliver seamless user interactions. Let's build something amazing together! ✨
            </p>
            <div href="" className="grid gap-3 md:flex md:space-x-2">
                <a className="bg-[#00A1E4] hover:bg-transparent hover:text-[#00A1E4] hover:outline text-white font-bold py-2 px-4 rounded transition">
                    Hire Me
                </a>
                <button className="bg-transparent outline outline-offset-1 outline-1 hover:bg-[#00A1E4] hover:text-white hover:outline-none text-[#00A1E4] font-bold py-2 px-4 rounded">
                    Let's Talk
                </button>
            </div>
            <div className='flex gap-4 mt-10 text-[#00A1E4] justify-center md:justify-start'>
                <Link>
                    <FaInstagram className='text-3xl border p-2 border-[#00A1E4] rounded-full' />
                </Link>
                <Link>
                    <FaLinkedin className='text-3xl border p-2 border-[#00A1E4] rounded-full' />
                </Link>
                <Link>
                    <FaGithub className='text-3xl border p-2 border-[#00A1E4] rounded-full' />
                </Link>
            </div>
        </section>
        </>
    )
}

export default Header
