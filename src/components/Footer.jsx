import React from 'react'
import {FaFace,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,    
    FaFacebook,
    
} from "react-icons/fa"
const Footer=()=>{
    return(
        <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 grid-cols-2
            border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-1">Martketing</li>
                        <li className="py-1">Analytics</li>
                        <li className="py-1">Commerce</li>
                        <li className="py-1">Data</li>
                        <li className="py-1">Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-1">Martketing</li>
                        <li className="py-1">Analytics</li>
                        <li className="py-1">Commerce</li>
                        <li className="py-1">Data</li>
                        <li className="py-1">Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-1">Martketing</li>
                        <li className="py-1">Analytics</li>
                        <li className="py-1">Commerce</li>
                        <li className="py-1">Data</li>
                        <li className="py-1">Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-1">Martketing</li>
                        <li className="py-1">Analytics</li>
                        <li className="py-1">Commerce</li>
                        <li className="py-1">Data</li>
                        <li className="py-1">Cloud</li>
                    </ul>
                </div>
                <div className="col-span-2 pt-8 md:pt-2">
                    <p2 className="font-bold uppercase">Subscribe to our newsletter</p2>
                    <p className="py-4">The lastest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className="flex flex-col sm:flex-row">
                        <input className="w-full p-2 mr-1 rounded-md mb-4" type="email" />
                        <button className="p-2 mb-4">Subscribe</button>
                    </form>
                </div>
    
            </div>
            <div className="flex mx-5 md:mx-0 flex-col max-w-[1240px] py-4 m-auto items center justify-between sm:flex-row text-center text-gray-500">
            <p>2023 Faan, LLC. All rights reserved</p>
            <div className="flex justify-between sm:w-[300px] pt-4 text-2xl mr-4">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>
                <FaGithub/>
            </div>
            </div>
        </div>
    )
}
export default Footer;