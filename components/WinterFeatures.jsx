import Image from 'next/image'
import React from 'react'

function WinterFeatures({ changeOverlay }) {
  return (
    <div onClick={() => changeOverlay()} className='hidden fixed left-0 top-0 w-full h-full bg-neutral-600 bg-opacity-50 z-[100] sm:flex justify-center items-center'>
        <div onClick={e => e.stopPropagation()} className='w-full h-fit relative overflow-hidden scale-0 flex bg-white shadow-xl rounded-xl scaleEnter sm:max-h-[600px] sm:max-w-[880px]'>
            <button onClick={() => changeOverlay('')} className='absolute left-4 top-4 rounded-full w-7 h-7 flex justify-center items-center bg-slate-100'>
                <svg className=' block fill-none h-4 w-4 stroke-current overflow-visible' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" strokeWidth={3}><path d="m6 6 20 20M26 6 6 26"></path></svg>
            </button>

            <div className='max-w-[55%] flex flex-col justify-center items-center p-24'>
                <h1 className='pb-5 text-4xl text-center font-bold'>Introducing Guest Favourites</h1>
                <p className='text-center text-gray-500 text-xl'>The most loved homes on Airbnb, according to guests. Plus other upgrades to help you find a great stay.</p>
                <button onClick={() => changeOverlay('signUp')} className='w-fit my-5 flex justify-center bg-neutral-800 px-6 py-4 gap-2 text-white text-xl font-semibold rounded-lg hover:shadow-lg active:scale-95 transition transform duration-75 ease-out'>
                    Get the new features
                </button>
            </div>
            <div className='relative w-full '>
                <Image 
                    src={'https://a0.muscache.com/im/pictures/8d5a7afa-342a-4cfc-94ad-11818dba7def.jpg?im_w=1440'}
                    fill='false'
                    style={{objectFit: 'cover'}}
                    alt='winter features image'
                />
            </div>
        </div>

    </div>
  )
}

export default WinterFeatures