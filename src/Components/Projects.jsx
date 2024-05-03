import React from 'react'
import './index.css'
import gifSharing from '../assets/images/gif-sharing.png';
import multisite from '../assets/images/multisite.png'
import NFT2 from '../assets/images/nft-2.png'
import nftFrontend from '../assets/images/nft-frontend.png'
import presaleNFT from '../assets/images/presale-nft.png'
import simulation from '../assets/images/simulation.png'
import tenderely from '../assets/images/tenderely.png'
import trabajo from '../assets/images/trabajo.png'
import eliteBond from '../assets/images/elite-bond.png'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <section className=''>
                <h1 className='font-bold text-5xl mb-10 text-center text-white'>My <span className='text-[#00A1E4]'>Projects</span></h1>
                {/* grid start */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>

                    {/* grid 1 */}
                    <div>
                        {/* 1 */}
                        <div>
                            <div class="rounded-t-3xl rounded-br-3xl overflow-hidden shadow-lg bg-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-slate-600 hover:shadow-xl">
                                <img class="w-auto" src={multisite} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2">Multisite</div>
                                    {/* <p class="text-gray-400 text-base mb-4">
                                    Multisite is a user-friendly platform offering a diverse range of web services for purchase and customization. From hosting plans to domain registrations, users can easily tailor their digital assets with intuitive tools, ensuring a personalized online experience backed by secure transactions and dedicated customer support.
                                </p> */}
                                    <Link to={'https://multisite-eight.vercel.app/'} className='text-[#00A1E4]'>Visit : https://multisite-eight.vercel.app/</Link>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div>
                            <div class="rounded-t-3xl rounded-br-3xl overflow-hidden shadow-lg bg-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-slate-600 hover:shadow-xl">
                                <img class="w-auto" src={presaleNFT} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2">Presale NFT</div>
                                    {/* <p class="text-gray-400 text-base mb-2">
                                    Presale NFT is your premier destination for avant-garde NFT services, offering a seamless platform for creators to 
                                    launch exclusive presales of their digital assets. With a user-friendly interface and cutting-edge technology.
                                </p> */}
                                    <Link to={'https://presale-nft-five.vercel.app/'} className='text-[#00A1E4]'>Visit : https://presale-nft-five.vercel.app/</Link>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div>
                            <div class="rounded-t-3xl rounded-br-3xl overflow-hidden shadow-lg bg-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-slate-600 hover:shadow-xl">
                                <img class="w-auto" src={simulation} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2">Simulations</div>
                                    {/* <p class="text-gray-400 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p> */}
                                    <Link to={'https://simulation-project-xi.vercel.app/'} className='text-[#00A1E4]'>Visit : https://simulation-project-xi.vercel.app/</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* grid 2 */}
                    <div>
                        {/* 4 */}


                        <div>
                            <div class="rounded-t-3xl rounded-br-3xl overflow-hidden shadow-lg bg-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-slate-600 hover:shadow-xl">
                                <img class="w-auto" src={eliteBond} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2">Elite Bond 2.0</div>
                                    {/* <p class="text-gray-400 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p> */}
                                    <Link to={'https://elite-bond.de/'} className='text-[#00A1E4]'>Visit : https://elite-bond.de/</Link>
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div>
                            <div class="rounded-t-3xl rounded-br-3xl overflow-hidden shadow-lg bg-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-slate-600 hover:shadow-xl">
                                <img class="w-auto" src={nftFrontend} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2">NFT (Landing Page)</div>
                                    {/* <p class="text-gray-400 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p> */}
                                    <Link to={'https://nft-frontend-gold-psi.vercel.app/'} className='text-[#00A1E4]'>Visit : https://nft-frontend-gold-psi.vercel.app/</Link>
                                </div>
                            </div>
                        </div>

                        {/* 7 */}
                        <div>
                            <div class="rounded-t-3xl rounded-br-3xl overflow-hidden shadow-lg bg-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-slate-600 hover:shadow-xl">
                                <img class="w-auto" src={tenderely} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2">Tenderely</div>
                                    {/* <p class="text-gray-400 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p> */}
                                    <Link to={'https://tenderely.vercel.app/'} className='text-[#00A1E4]'>Visit : https://tenderely.vercel.app/</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* 8 */}
                        <div>
                            <div class="rounded-t-3xl rounded-br-3xl overflow-hidden shadow-lg bg-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-slate-600 hover:shadow-xl">
                                <img class="w-auto" src={trabajo} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2">Trabajo</div>
                                    {/* <p class="text-gray-400 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p> */}
                                    <Link to={'https://trabajo-ruby.vercel.app/'} className='text-[#00A1E4]'>Visit : https://trabajo-ruby.vercel.app/</Link>
                                </div>
                            </div>
                        </div>
                        {/* 9 */}
                        <div>
                            <div class="rounded-t-3xl rounded-br-3xl overflow-hidden shadow-lg bg-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-slate-600 hover:shadow-xl">
                                <img class="w-auto" src={gifSharing} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2">GIF Sharing</div>
                                    {/* <p class="text-gray-400 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p> */}
                                    <Link to={'https://gif-sharing-lac.vercel.app/'} className='text-[#00A1E4]'>Visit : https://gif-sharing-lac.vercel.app/</Link>
                                </div>
                            </div>
                        </div>
                        {/* 10 */}
                        <div>
                            <div class="rounded-t-3xl rounded-br-3xl overflow-hidden shadow-lg bg-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-slate-600 hover:shadow-xl">
                                <img class="w-auto" src={NFT2} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2">Voldemort NFTs</div>
                                    {/* <p class="text-gray-400 text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p> */}
                                    <Link to={'https://nft-2-flame.vercel.app/'} className='text-[#00A1E4]'>Visit : https://nft-2-flame.vercel.app/</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* grid end */}
            </section>
        </>
    )
}

export default Projects