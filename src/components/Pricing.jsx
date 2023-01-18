import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'

const Pricing=()=>{
    return(
        <div className="text-white w-ful my-24" id="Pricing">
            <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay">
                
            </div>
            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300">
                    <h2 className="text-3xl uppercase">Pricing</h2>
                    <h3 className="text-5xl font-bold text-white py-8">The right price for your research.</h3>
                    <p className="text-3xl">Sint esse eu qui mollit cillum sit proident ex 
                        aliquip esse. Do tempor dolor ad nisi veniam u
                        t. Mollit dolor ipsum fugiat reprehenderit magn
                        a anim. Do sint Lorem officia cillum.</p>
                </div>
                <div  className="grid md:grid-cols-2">
                <div className="bg-white relative text-slate-900 m-4 p-8 rounded-xl shadow-2xl">
                    <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm" >Standard</span>
                    <div>
                        <p className="text-5xl font-bold py-4 flex">$49<span className="text-xl textslate-500 flex flex-col justify-start">/month</span></p>
                    </div>
                    <p className="text-2xl py-8 text-slate-500">Sint esse eu qui mollit cillum sit proident ex</p>
                    <div className="text-2xl">
                        <p className="flex py-4"><FontAwesomeIcon icon={faCheck} className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
                        <p className="flex py-4"><FontAwesomeIcon icon={faCheck} className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
                        <p className="flex py-4"><FontAwesomeIcon icon={faCheck} className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
                        <p className="flex py-4"><FontAwesomeIcon icon={faCheck} className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
                        <button className="w-full py-4 my-4" >Get Started</button>
                    </div>
                </div>
                <div className="bg-white relative text-slate-900 m-4 p-8 rounded-xl shadow-2xl">
                    <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm" >Standard</span>
                    <div>
                        <p className="text-5xl font-bold py-4 flex">$49<span className="text-xl textslate-500 flex flex-col justify-start">/month</span></p>
                    </div>
                    <p className="text-2xl py-8 text-slate-500">Sint esse eu qui mollit cillum sit proident ex</p>
                    <div className="text-2xl">
                        <p className="flex py-4"><FontAwesomeIcon icon={faCheck} className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
                        <p className="flex py-4"><FontAwesomeIcon icon={faCheck} className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
                        <p className="flex py-4"><FontAwesomeIcon icon={faCheck} className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
                        <p className="flex py-4"><FontAwesomeIcon icon={faCheck} className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
                        <button className="w-full py-4 my-4" >Get Started</button>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Pricing;