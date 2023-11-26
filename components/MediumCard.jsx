import React from 'react'
import Image from 'next/image'

function MediumCard({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image 
              loading='lazy'
              src={img}
              fill='false'
              style={{objectFit: 'cover',}}
              className='rounded-xl'
              alt='medium card image'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard