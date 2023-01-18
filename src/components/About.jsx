import React from 'react'

const About=()=> {
  return (
    <div className="w-full my-32" id="About">
        <div className='max-w-[1240px] mx-auto'>
            <div className="text-center">
                <h2 className="text-5xl font-bold">Trusted by developers across the world</h2>
                <p className="text-3xl py-6 text-gray-500">Tempor deserunt culpa anim veniam cillum labore proident. Excepteur anim anim amet sunt dolor officia proident labore ex irure deserunt incididunt elit. Occaecat cupidatat ut ipsum officia et culpa veniam ipsum. Sunt veniam eu reprehenderit cupidatat officia aute aliqua ad nulla officia cillum amet. Ipsum enim qui velit veniam. Id aute magna reprehenderit cupidatat non adipisicing. Exercitation fugiat aute pariatur magna nisi reprehenderit laborum occaecat labore.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                <div className="border py-8 rounded-xl shadow-xl mt-2">
                    <p className="text-6xl font-bold text-indigo-600">100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl mt-2">
                    <p className="text-6xl font-bold text-indigo-600">24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl mt-2">
                    <p className="text-6xl font-bold text-indigo-600">100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>

            </div>
        </div>
    </div>
  )
}
export default About;
