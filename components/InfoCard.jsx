import Image from 'next/image'
import React from 'react'
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function InfoCard(props) {

    const truncate = (text, size) => {
        return (text.length > size) ? text.slice(0, size) + '...' : text;
    }

  return (
    <div className='flex flex-col md:flex-row py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out '>
        <div className='relative mb-5 h-60 w-full md:h-52 md:w-80 flex-shrink-0'>
            <Image
                loading='eager'
                alt='Room Image'
                fill='false'
                src={props.img}
                style={{ objectFit:'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-2xl'
            />
        </div>

        <div className='flex flex-col flex-grow md:pl-5'>
            <div className='flex justify-between'>
                <p>{props.name}</p>
                <HeartIcon className='h-7 cursor-pointer' />
            </div>

            <h4 className='text-xl text-gray-500'>{props.city}. {props.roomType}</h4>

            <div className='border-b w-10 pt-2'/>

            <p className='hidden sm:inline-flex pt-2 text-sm text-gray-500 flex-grow'>{truncate(props.description, 400)}</p>

            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    {props.reviews}
                    <StarIcon className='h-5 text-red-400'/>
                     from {props.numberOfReviewers} reviewers
                </p>

                <div className=''>
                    <p className='text-lg lg:2xl font-semibold pb-2'>{props.price} $</p>
                    <p className='text-right font-extraLight'>$ {props.days > 0 ? props.price * props.days : props.price} total</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard