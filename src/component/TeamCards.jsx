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
// import data from "../app/team/data"
const TeamCards = ({data}) => {
  return (
    <div className='flex-col justify-center  mb-[5rem]'>
            <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Core Team</span>
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
      style={{paddingBottom:"30px"}}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {data[0].core.map((card,index)=>(
          <SwiperSlide className='flex justify-center' key={index}>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700" >
              <div className="pw flex flex-col items-center pb-10">
              <Image loading='lazy'   src={card.img} width={160} height={160} className='rounded-full shadow-lg'/>
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                   <a href={card.instaLink}>
                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href={card.linkedinLink}>
                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
              
      </Swiper>
      <div className='flex flex-col justify-center items-center'>
      
      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Coding Team</span>
      </div>


            <div className="main-th w-[300px] h-[300px] mt-[3rem] pl-[0px] mt-[1rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src="https://res.cloudinary.com/ddtwrelap/image/upload/v1700978912/gfg-team/p4mmqadjsnrhujbmhsbn.jpg" alt="Aryan" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">Aryan Patil</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">Coding Head</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                  <a href="https://www.instagram.com/aryan_45910/">
                <BsInstagram style={{ fontSize: '24px' }} />
                  </a>
                  <a href="https://www.linkedin.com/in/aryanp45">
                <BsLinkedin style={{ fontSize: '24px' }} />
                  </a>
                </div>
              </div>
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
      style={{paddingBottom:"30px"}}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0]?.tech?.map((card,index)=>(
          <SwiperSlide className='flex justify-center' key={index}>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
              <Image loading='lazy'  src={card.img} width={160} height={160} className='rounded-full shadow-lg'/>
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                   <a href={card.instaLink}>
                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href={card.linkedinLink}>
                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>



      <div className='flex flex-col justify-center items-center'> 
            <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Design Team</span>
            </div>

            <div className="main-th  w-[300px] h-[300px] mt-[3rem] pl-[0px] mt-[1rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src="https://res.cloudinary.com/ddtwrelap/image/upload/v1698319989/gfg-team/h8aabf6jekoch1soyu1e.jpg" alt="Bhagrashree" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">Bhagyashree Tekade</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">Design Head</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <a href="https://www.instagram.com/___bhagyashree_10_8__/">

                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href="https://www.linkedin.com/in/williamhgates/">

                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
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
      style={{paddingBottom:"30px"}}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].design.map((card,index)=>(
          <SwiperSlide className='flex justify-center' key={index}>
          <div className="main w-[300px] h-[300px]  bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
              <Image loading='lazy'   src={card.img} width={160} height={160} className='rounded-full shadow-lg'/>   
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                   <a href={card.instaLink}>
                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href={card.linkedinLink}>
                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>
    </div>

     <div className='flex flex-col justify-center items-center'>

            <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Event Team</span>
            </div>
            
            <div className="main-th  w-[300px] h-[300px] mt-[3rem] pl-[0px] mt-[1rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src="https://res.cloudinary.com/ddtwrelap/image/upload/v1698319400/gfg-team/ak3cl3usjb3mt29u1smv.jpg" alt="varad" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">Varad Patil</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">Event Head</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <a href="https://instagram.com/varad_patil27?igshid=MzMyNGUyNmU2YQ==">

                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href="https://www.linkedin.com/in/varad-patil-07bb7922a">

                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
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
      style={{paddingBottom:"30px"}}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].event.map((card,index)=>(
          <SwiperSlide className='flex justify-center' key={index}>
          <div className="main w-[300px] h-[300px] mt-[rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
              <Image loading='lazy'   src={card.img} width={160} height={160} className='rounded-full shadow-lg'/>
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                   <a href={card.instaLink}>
                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href={card.linkedinLink}>
                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>
    </div>

      <div className='flex flex-col justify-center items-center'>

           <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Finance Team</span>
            </div>

            <div className="main-th  w-[300px] h-[300px] mt-[3rem] pl-[0px] mt-[1rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="pw flex flex-col items-center pb-10">
                <img className="pic w-40 h-40 mb-3 rounded-full shadow-lg" src="https://res.cloudinary.com/dngvge2sb/image/upload/v1698168431/GFG%20TEAM/pjcmjlwllmqsrolr8piw.jpg" alt="devesh" />
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">Devesh Zinzuwadia</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">Finance Head</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                <a href="https://instagram.com/devesh_zinzuwadia?igshid=OGQ5ZDc2ODk2ZA==">

                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href="https://www.linkedin.com/in/devesh-zinzuwadia-613b55243">

                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
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
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].finance.map((card,index)=>(
          <SwiperSlide className='flex gap-[2rem] justify-around' key={index}>
          <div className="main w-[300px] h-[300px]  mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 20px' }}>
              <div className="pw flex flex-col items-center pb-10">
              <Image loading='lazy'   src={card.img} width={160} height={160} className='rounded-full shadow-lg'/>
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>
    </div>
      
      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Documentation Team</span>
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
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].doc.map((card,index)=>(
          <SwiperSlide className='flex justify-center' key={index}>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
              <Image loading='lazy'   src={card.img} width={160} height={160} className='rounded-full shadow-lg'/>
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                   <a href={card.instaLink}>
                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href={card.linkedinLink}>
                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>

      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Content Team</span>
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
      style={{paddingBottom:"30px"}}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].content.map((card,index)=>(
          <SwiperSlide className='flex justify-center' key={index}>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
              <Image loading='lazy'   src={card.img} width={160} height={160} className='rounded-full shadow-lg'/>
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                   <a href={card.instaLink}>
                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href={card.linkedinLink}>
                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>

      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Publicity Team</span>
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
      style={{paddingBottom:"30px"}}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].publicity.map((card,index)=>(
          <SwiperSlide className='flex justify-center' key={index}>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
              <Image loading='lazy'   src={card.img} width={160} height={160} className='rounded-full shadow-lg'/> 
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                   <a href={card.instaLink}>
                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href={card.linkedinLink}>
                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>

      <div className='mt-[5.2%] text-[30px] text-white flex justify-center font-black'>
                <span>Photography Team</span>
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
      style={{paddingBottom:"30px"}}
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={5}
        slidesPerView={1}
      >
        {data[0].pv.map((card,index)=>(
          <SwiperSlide className='flex justify-center' key={index}>
          <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"style={{ margin: '0 5px' }}>
              <div className="pw flex flex-col items-center pb-10">
              <Image loading='lazy'  src={card.img} width={160} height={160} className='rounded-full shadow-lg'/> 
                <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">{card.title}</h5>
                <span className="pos text-sm text-gray-500 dark:text-gray-400">{card.pos}</span>
                <div className="s-handles flex mt-4 space-x-3 md:mt-6">
                   <a href={card.instaLink}>
                <BsInstagram style={{ fontSize: '24px' }} />
                </a>
                <a href={card.linkedinLink}>
                <BsLinkedin style={{ fontSize: '24px' }} />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          
      
      
      </Swiper>

    </div>
  )
}

export default TeamCards