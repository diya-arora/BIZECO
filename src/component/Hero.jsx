"use client"
import React,{ useEffect,useState } from 'react';
import Typewriter from "typewriter-effect";
import Countdown from './Countdown';
import CountdownTimer from './Counter';
const Hero = () => {
    const [isExpired, setisExpired] = useState(false)
    let endDate = new Date("November 4, 2023 23:59:59").getTime()-new Date().getTime();
    let NOW_IN_MS=new Date().getTime();
    let dateTimeAfterThreeDays= NOW_IN_MS  + endDate;


    return (
        <div className='hero-section flex justify-center items-center flex-col '>
            <div className='h-[61%] w-[87%] flex flex-col items-center gap-2 justify-center hero-image-container  ' >
                {/* <img src="../assets/logo.jpeg" alt="" /> */}
                <div className='text text-9xl font-black  register tracking-widest '>{isExpired?"":" BIZECO "}</div> 
                <div className='text text-4xl font-black  register'>{isExpired?"":"- MIND YOUR OWN BUSINESS -"}</div>
                
            </div>
            

            <div className='flex flex-col items-center'>
                {/* <Countdown/> */}
                {/* Removed for lagging on mobile devices */}
                {/* <div className="App flex mb-[2rem] text-[34px] font-black">
                    <Typewriter

                        options={{
                            autoStart: true,
                            delay: 75,
                            loop: true,
                        }}

                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Let geekvishwa be passport to your Geekdom!")
                                .pauseFor(100)
                                .deleteAll()
                                .start()
                        }}
                    />
                </div> */}
                
                {/* <div className='mb-[3rem] flex-center justify-center '>
                    <h3 className='text-[60px] text-6xl font-black  register'>{isExpired?"":"Register Now !!!"}</h3>
                </div> */}

                
            </div>
        </div>
    )
}

export default Hero