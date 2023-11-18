import React from 'react';
import Image from 'next/image';

function SmallCard( {img, location, distance} ) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
        <div className='relative h-16 w-16'>
            <Image 
                src={img}
                fill='false'
                style={{objectFit: "cover"}}
                className='rounded-lg'
                alt='city images'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>

        <div>
          <h2>{location}</h2>
          <he className='text-gray-500'>{distance}</he>
        </div>
    </div> 
  )
}

export default SmallCard