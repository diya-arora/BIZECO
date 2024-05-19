"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./T-card.css"
// import required modules
import { Autoplay, Pagination } from "swiper/modules"
// import data from "../app/team/data"
const TeamCardss = ({data}) => {
  return (
    <div className='flex-col justify-center  mb-[5rem]'>
            <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span> Events </span>
            </div>

      <Swiper
      breakpoints={{
        1400: {
          // width: 768,

          slidesPerView: 2,
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
      style={{paddingBottom:"30px"}}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {data[0].core.map((card,index)=>(
          <SwiperSlide className='flex justify-center' key={index}>
          <div className="main w-[600px] h-[400px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700" >
              <div className="pw flex flex-col p-4 items-center pb-10">
              <Image loading='lazy'   src={card.img} width={160} height={160} className='rounded-full shadow-lg'/>
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
              
      </Swiper>

    </div>
  )
}

export default TeamCardss