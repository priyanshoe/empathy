'use client'

import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";
export default function Navbar(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    return(
        <div className="main relative font-[demo4]  ">
            <div className="z-99 absolute w-9/10 top-4 left-1/20 flex justify-between items-center pr-5 lg:px-8 border-[#fcfcfc3c] border-1">
                
                <div className="hidden lg:block ">
                    <h2><Link href='/'>OUR REEL</Link></h2>
                </div>
                
                <div className="h-full flex justify-center items-center border-[#fcfcfc3c] py-3 px-5 border-r-2 lg:border-l-2">
                    <h1 className="p-2 md:px-5 lg:text-3xl lg:px-40 text-medium md:text-xl font-[heading]">EMAPTHY</h1>
                </div>
                
                
                <div className="flex justify-between items-center md:w-1/4 lg:w-1/5 ">
                    <h3 className="hidden md:block">HOME</h3>
                    <div className="hidden md:block h-[1px] w-12 bg-[#fcfcfc3c]"></div>
                    {
                        isOpen ?
                        <TfiClose size={28} onClick={() => setIsOpen(!isOpen)}  />
                        :
                        <VscMenu size={28} onClick={() => setIsOpen(!isOpen)} />
                    }
                </div>


            </div>

            <div className={`z-10 h-screen w-full bg-[#181C22] absolute top-0 left-0 ${isOpen ? 'translate-y-0' : '-translate-y-[100%]'}
                            flex flex-col items-center justify-center text-center transition duration-1500 cubic-bezier( 0.785, 0.135, 0.15, 0.86 ) `}>
                <ul className="stroke font-[stroke-bold] text-transparent text-4xl flex flex-col justify-between h-3/7">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    )
}