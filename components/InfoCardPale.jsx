import React from 'react'
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function InfoCardPale() {

  return (
    <div className='flex flex-col md:flex-row h-fit py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out '>
        <div className='relative mb-5 h-60 w-full animate-pulse bg-slate-300 rounded-lg h24 md:h-52 md:w-80 flex-shrink-0'></div>

        <div className='flex flex-col flex-grow md:pl-5'>
            <div className='flex justify-between'>
                <p className='bg-slate-300 animate-pulse rounded-lg w-2/3'></p>
                <HeartIcon className='h-7 cursor-pointer' />
            </div>

            <h4 className='text-xl w-1/2 h-7 mt-2 rounded-lg animate-pulse bg-slate-300'></h4>

            <div className='border-b w-10 pt-2'/>
            <p className='hidden sm:inline-flex pt-2 w-11/12 text-sm rounded-lg bg-slate-300 animate-pulse mt-2 flex-grow'></p>

            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-400'/>
                </p>

                <div className=''>
                    <p className='text-lg rounded-lg w-10 h-5 bg-slate-300 animate-pulse lg:2xl font-semibold pb-2'></p>
                    <p className='text-right rounded-lg mt-2 w-16 h-5 bg-slate-300 animate-pulse font-extraLight'></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCardPale