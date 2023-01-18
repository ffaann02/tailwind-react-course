import React,{useState} from "react";
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
import { Link } from "react-scroll";
const Navbar=()=>{
    const [isOpenNav,setIsOpenNav] = useState(false)
    return(
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                <Link activeClass="active" to="Hero" spy={true} smooth={true} offset={0} duration={1000}>
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">Brand.</h1>
                </Link>
                    
                    <ul className="hidden md:flex">
                        <Link activeClass="active" to="Hero" spy={true} smooth={true} offset={0} duration={1000}><li className="cursor-pointer">Home</li></Link>
                        <Link activeClass="active" to="About" spy={true} smooth={true} offset={-100} duration={1000}><li className="cursor-pointer">About</li></Link>
                        <Link activeClass="active" to="Support" spy={true} smooth={true} offset={-100} duration={1000}><li className="cursor-pointer">Support</li></Link>
                        <Link activeClass="active" to="Platforms" spy={true} smooth={true} offset={-100} duration={1000}><li className="cursor-pointer">Platforms</li></Link>
                        <Link activeClass="active" to="Pricing" spy={true} smooth={true} offset={-100} duration={1000}><li className="cursor-pointer">Pricing</li></Link>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4">Sign In</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>
                <div className="flex md:hidden">
                {isOpenNav ?<XMarkIcon className="w-5 mr-5 cursor-pointer" onClick={()=>{setIsOpenNav(prev=>!prev)}}/>
                :<Bars3Icon className="w-5 mr-5 cursor-pointer" onClick={()=>{setIsOpenNav(prev=>!prev)}}/>}
                </div>
            </div>
            {isOpenNav?<ul className="absolute bg-zinc-200 w-full px-8">
                <Link activeClass="active" to="Hero" spy={true} smooth={true} offset={0} duration={1000}><li className="border b-2 border-zinc-300 w-full">Home</li></Link>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1000}><li className="border b-2 border-zinc-300 w-full">About</li></Link>
                <Link activeClass="active" to="Support" spy={true} smooth={true} offset={0} duration={1000}><li className="border b-2 border-zinc-300 w-full">Support</li></Link>
                <Link activeClass="active" to="Platforms" spy={true} smooth={true} offset={0} duration={1000}><li className="border b-2 border-zinc-300 w-full">Platforms</li></Link>
               <Link activeClass="active" to="Pricing" spy={true} smooth={true} offset={0} duration={1000}> <li className="border b-2 border-zinc-300 w-full">Pricing</li></Link>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>
            </ul>:""}
        </div>
    )
}
export default Navbar;