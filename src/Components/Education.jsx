import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import './index.css';

const Education = () => {
    return (
        <div className='text-white justify-center mx-auto'>
            <h1 className='font-bold text-5xl mb-10 text-center'>My <span className='text-[#00A1E4]'>Journey</span></h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* column 1 */}
                <div>
                    <h1 className='font-bold text-3xl mb-5 ml-6'>Education</h1>
                    <div className='border-l-2 border-[#00A1E4] pl-6'>
                        <div className='border-2 rounded border-[#00A1E4] p-3 mb-3 journey'>
                            <div className='flex items-center text-[#00A1E4] mb-1'><FaCalendarAlt className='mr-4' /> 2021 - Current</div>
                            <h3 className='font-bold mb-1 text-xl'>Umar Bhasha Institute of Technology</h3>
                            <p>Currently completing Bachelors in Computer Science from UBIT of Karachi University of 4th year (Final year)</p>
                        </div>
                        <div className='border-2 rounded border-[#00A1E4] p-3 mb-3 journey journey'>
                            <div className='flex items-center text-[#00A1E4] mb-1'><FaCalendarAlt className='mr-4' /> 2018 - 2020</div>
                            <h3 className='font-bold mb-1 text-xl'>DJ Sindh Govt. Science College</h3>
                            <p>Completed my Fsc. (intermediate) from pre-engineering from DJ Science College</p>
                        </div>
                        <div className='border-2 rounded border-[#00A1E4] p-3 mb-3 journey journey'>
                            <div className='flex items-center text-[#00A1E4] mb-1'><FaCalendarAlt className='mr-4' /> 2016 - 2018</div>
                            <h3 className='font-bold mb-1 text-xl'>Merit n Merit School</h3>
                            <p>I successfully completed my matriculation in computer science, This academic achievement has equipped me with a
                                solid understanding of computer science fundamentals.</p>
                        </div>
                    </div>
                </div>

                {/* column 2 */}
                <div>
                    <h1 className='font-bold text-3xl mb-5 ml-6'>Experince</h1>
                    <div className='border-l-2 border-[#00A1E4] pl-6'>
                        <div className='border-2 rounded border-[#00A1E4] p-3 mb-3 journey'>
                            <div className='flex items-center text-[#00A1E4] mb-1'><FaCalendarAlt className='mr-4' /> Nov 2022 – Feb 2023</div>
                            <h3 className='font-bold mb-1 text-xl'>Zai Systems (SMC - PVT) LTD (Intern)</h3>
                            <p>Proficient in accurately duplicating the design and functionality of diverse web pages, demonstrating meticulous
                                attention to detail and adaptability</p>
                        </div>
                        <div className='border-2 rounded border-[#00A1E4] p-3 mb-3 journey'>
                            <div className='flex items-center text-[#00A1E4] mb-1'><FaCalendarAlt className='mr-4' /> Feelance (International Client)</div>
                            <h3 className='font-bold mb-1 text-xl'>ServiceTradie web design</h3>
                            <p>Front-end on HTML , CSS and BOOTSTRAP and Desktop, Tab and mobile responsive website</p>
                        </div>
                        <div className='border-2 rounded border-[#00A1E4] p-3 mb-3 journey'>
                            <div className='flex items-center text-[#00A1E4] mb-1'><FaCalendarAlt className='mr-4' /> 2016 - 2018</div>
                            <h3 className='font-bold mb-1 text-xl'>Frontend Development Contributions at Evolvedge Technologies</h3>
                            <p>Ensured optimal website performance, cross-browser compatibility, and accessibility compliance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education