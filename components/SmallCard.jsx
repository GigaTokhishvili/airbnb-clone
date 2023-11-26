import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function SmallCard( {img, location, distance} ) {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/search',
      query: {
        location: location,
        startDate: 'Fri Dec 01 2023 00:00:00 GMT+0400 (Georgia Standard Time)',
        endDate: 'Sun Dec 01 2024 00:00:00 GMT+0400 (Georgia Standard Time)',
        guests: 1,
      }
    })
  }

  return (
    <div onClick={handleClick} className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
        <div className='relative h-16 w-16'>
            <Image 
              loading='eager'
              src={img}
              fill='false'
              style={{objectFit: "cover"}}
              className='rounded-lg'
              alt={`${location} image`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>

        <div>
          <h2>{location}</h2>
          <h4 className='text-gray-500'>{distance}</h4>
        </div>
    </div> 
  )
}

export default SmallCard