import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
const AllInOne=()=>{
    const n=8;
    return(
        <div className="w-full my-32" id="Platforms">
            <div className="max-w-[1240px] mx-auto px-2">
                <h2 className="text-5xl font-bold text-center">All-In-One Platform </h2>
                <p className="text-2xl py-8 text-gray-500 text-center">Sint esse eu qui mollit cillum sit proident ex 
                        aliquip esse. Do tempor dolor ad nisi veniam u
                        t. Mollit dolor ipsum fugiat reprehenderit magn
                        a anim. Do sint Lorem officia cillum.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

{Array.apply(null, { length: 8 }).map((e, i) => (
  <div className="flex">
  <div>
  <FontAwesomeIcon icon={faCheck} className="w-7 mr-4 text-green-600"/>
  </div>
  <div >
      <h3 className="font-bold text-lg">Notifications</h3>
      <p className="text-lg pt-2 pb-1">Sint esse eu qui mollit cillum sit proident ex 
      aliquip esse. Do tempor dolor ad nisi veniam u
      t. Mollit dolor ipsum fugiat reprehenderit magn
      a anim. Do sint Lorem officia cillum.</p>
  </div>
</div>
))}
                
            </div>
        </div>
    )
}
export default AllInOne;