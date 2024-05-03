import React from 'react'
import './index.css';

const Skills = () => {
    return (
        <div className='text-white'>
            <h1 className='font-bold text-5xl mb-10 text-center'>My <span className='text-[#00A1E4]'>Skills</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <div className='uppercase text-2xl mb-6 ml-6'>coding skills</div>
                    <div className='border-2 rounded border-[#00A1E4] p-4 skill-box'>
                        {/* skill 1 */}
                        <div className='mb-4'>
                            <div className='flex justify-between mb-2'><span>Html</span> <span className='text-[#00A1E4]'>90%</span></div>
                            <div class="w-full rounded p-2 border border-[#00A1E4]">
                                <div class="bg-[#00A1E4] h-2.5 rounded" style={{ width: "90%" }}></div>
                            </div>
                        </div>

                        {/* skill 2 */}
                        <div className='mb-4'>
                            <div className='flex justify-between mb-2'><span>CSS</span> <span className='text-[#00A1E4]'>80%</span></div>
                            <div class="w-full rounded p-2 border border-[#00A1E4]">
                                <div class="bg-[#00A1E4] h-2.5 rounded" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                        {/* skill 3 */}
                        <div className='mb-4'>
                            <div className='flex justify-between mb-2'><span>JavaScript</span> <span className='text-[#00A1E4]'>65%</span></div>
                            <div class="w-full rounded p-2 border border-[#00A1E4]">
                                <div class="bg-[#00A1E4] h-2.5 rounded" style={{ width: "65%" }}></div>
                            </div>
                        </div>

                        {/* skill 4 */}
                        <div className='mb-4'>
                            <div className='flex justify-between mb-2'><span>React JS</span> <span className='text-[#00A1E4]'>62%</span></div>
                            <div class="w-full rounded p-2 border border-[#00A1E4]">
                                <div class="bg-[#00A1E4] h-2.5 rounded" style={{ width: "62%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='uppercase text-2xl mb-6 ml-6'>Professional skills</div>
                    <div className='border-2 rounded border-[#00A1E4] p-4 skill-box'>

                        {/* exp 1 */}
                        <div className='mb-4'>
                            <div className='flex justify-between mb-2'><span>Web Design</span> <span className='text-[#00A1E4]'>95%</span></div>
                            <div class="w-full rounded p-2 border border-[#00A1E4]">
                                <div class="bg-[#00A1E4] h-2.5 rounded" style={{ width: "95%" }}></div>
                            </div>
                        </div>

                        {/* exp 2 */}
                        <div className='mb-4'>
                            <div className='flex justify-between mb-2'><span>Web Development</span> <span className='text-[#00A1E4]'>67%</span></div>
                            <div class="w-full rounded p-2 border border-[#00A1E4]">
                                <div class="bg-[#00A1E4] h-2.5 rounded" style={{ width: "67%" }}></div>
                            </div>
                        </div>

                        {/* exp 3 */}
                        <div className='mb-4'>
                            <div className='flex justify-between mb-2'><span>API Integeration</span> <span className='text-[#00A1E4]'>64%</span></div>
                            <div class="w-full rounded p-2 border border-[#00A1E4]">
                                <div class="bg-[#00A1E4] h-2.5 rounded" style={{ width: "64%" }}></div>
                            </div>
                        </div>

                        {/* exp 4 */}
                        <div className='mb-4'>
                            <div className='flex justify-between mb-2'><span>Ecommerce Site</span> <span className='text-[#00A1E4]'>53%</span></div>
                            <div class="w-full rounded p-2 border border-[#00A1E4]">
                                <div class="bg-[#00A1E4] h-2.5 rounded" style={{ width: "53%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills