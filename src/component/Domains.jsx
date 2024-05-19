"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../app/team/T-card.css"
// import required modules
import { Autoplay, Pagination } from "swiper/modules"
import data from "../app/domain_data"
const Domains = () => {
    return (
        <div className='flex-col justify-center  mb-[5rem]'>
            <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black gfg-gradient'>
                <span>Domains</span>
            </div>

            <Swiper
                breakpoints={{
                    1400: {
                        // width: 768,

                        slidesPerView: 3,
                    },
                    900: {
                        // width: 768,
                        slidesPerView: 2,
                    },
                    500: {
                        // width: 768,
                        slidesPerView: 1,
                    },
                }}
                style={{ paddingBottom: "30px" }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                autoplay={true}
                spaceBetween={50}
                slidesPerView={1}
            >
                {data[0].core.map((card, index) => (
                    <SwiperSlide className='flex justify-center' key={index}>
                        <div className="main-domain w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700" >
                            <div className="pw flex flex-col items-center pb-10">
                                <Image loading='lazy' src={card.img} width={160} height={160} className='rounded-full shadow-lg' />
                                <h5 className="title mb-1 pt-[1rem] text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                                <div className="s-handles flex mt-4 space-x-3 md:mt-6" style={{ width: "60%" }}>
                                    <span>{card.desc}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className='flex flex-col justify-center items-center'>
                <Swiper
                    breakpoints={{
                        1400: {
                            // width: 768,

                            slidesPerView: 3,
                        },
                        900: {
                            // width: 768,
                            slidesPerView: 2,
                        },
                        500: {
                            // width: 768,
                            slidesPerView: 1,
                        },
                    }}
                    style={{ paddingBottom: "30px" }}
                    pagination={true}
                    modules={[Pagination, Autoplay]}
                    autoplay={true}
                    spaceBetween={5}
                    slidesPerView={1}
                >
                    {data[0].tech.map((card, index) => (
                        <SwiperSlide className='flex justify-center' key={index}>
                            <div className="main-domain w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700" style={{ margin: '0 5px' }}>
                                <div className="pw flex flex-col items-center pb-10">
                                    <div className='bg-[#fff] rounded-full'>
                                        <Image loading='lazy' src={card.img} width={160} height={160} className='rounded-full shadow-lg' />

                                    </div>
                                    <h5 className="title mb-1 pt-[1rem] text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                                    {/* <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span> */}
                                    <div className="s-handles w-[80%] flex mt-4 space-x-3 md:mt-6" style={{ width: "60%" }}>
                                        <span>{card.desc}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='flex justify-center text-[#14c941] h-[4rem] mt-[3rem]  '>
                <a href="/assets/name.pdf " className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#fff] rounded-full blur-md ease"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#9AB8D0] rounded-full blur-md"></span>
                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#9AB8D0] rounded-full blur-md"></span>
                    </span>
                    <span className="relative text-black">GET MORE INFO</span>
                </a>
            </div>

        </div>
    )
}

export default Domains