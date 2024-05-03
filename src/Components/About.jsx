import React from 'react'

const About = () => {
    return (
        <div className='text-white text-center'>
            <h1 className='font-bold text-5xl mb-10'>About <span className='text-[#00A1E4]'>Me</span></h1>
            <h3 className='uppercase text-3xl mb-6'>Frontend Developer</h3>
            <p className='mb-10'>As a frontend developer, my primary focus is on crafting immersive and seamless user experiences. Leveraging my 
                expertise in HTML, CSS, and JavaScript, I transform design concepts into interactive and responsive web applications. 
                With a keen eye for detail, I ensure pixel-perfect implementation and optimal performance across various devices and 
                browsers. Embracing modern frameworks like React or Vue.js, I bring dynamic and efficient functionality to the forefront. 
                Constantly staying abreast of industry trends, I am committed to delivering not just visually stunning interfaces, but also 
                ensuring accessibility and usability for diverse audiences. Through a passion for clean and efficient code, I contribute to the 
                creation of intuitive interfaces that enhance user engagement and satisfaction.
            </p>
            <button className="bg-[#00A1E4] hover:bg-transparent hover:text-[#00A1E4] hover:outline text-white font-bold py-2 px-4 rounded transition">
                    Learn More
            </button>
        </div>
    )
}

export default About