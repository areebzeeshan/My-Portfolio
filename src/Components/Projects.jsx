import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import { projects } from '../data/data';

const Projects = () => {

    return (
        <>
            <section className='py-16 bg-gray-900'>
                <h1 className='font-bold text-5xl mb-10 text-center text-white'>
                    My <span className='text-[#00A1E4]'>Projects</span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
                    {projects.map((item, index) => (
                        <div key={index} className="bg-[#1E1E1E] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <img className="w-full h-48 object-cover" src={item.imgSrc} alt={item.title} />
                            <div className="p-6 flex flex-col items-center">
                                <h2 className="text-xl font-bold text-white mb-4">{item.title}</h2>
                                <a href={item.url} className="bg-[#00A1E4] text-white font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-[#007bbd]">
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Projects