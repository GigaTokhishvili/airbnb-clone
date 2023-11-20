import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

function Banner() {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/search', 
      query: {
        location: 'any',
        startDate: 'Fri Dec 01 2023 00:00:00 GMT+0400 (Georgia Standard Time)',
        endDate: 'Sun Dec 01 2024 00:00:00 GMT+0400 (Georgia Standard Time)',
        guests: 1,
      }
    })
  }
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h[700px] bg-slate-500'>
        <Image 
            src='https://links.papareact.com/0fm'
            fill='false'
            style={{objectFit: "cover"}}
            alt='banner image'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
            <button onClick={handleClick} className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I am flexible</button>
        </div>
    </div>
  )
}

export default Banner