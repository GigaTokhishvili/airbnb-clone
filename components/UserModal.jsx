import React from 'react'
import { useRouter } from 'next/router'

function UserModal({ changeOverlay }) {
    const router = useRouter();

  return (
    <ul className='hidden absolute top-20 w-60 h-[290px] rounded-lg bg-white shadowRound overflow-hidden select-none sm:inline-block sm:right-8 xl:right-[17rem]'>
        <div className='border-b py-2'>
            <li onClick={() => changeOverlay('winterFeatures')} className='cursor-pointer flex justify-between items-center px-4 py-2 hover:bg-neutral-100 whitespace-nowrap font-semibold'>
                Winter Release Features 
                {<svg height="15" viewBox="0 0 79 37" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group 1"><rect id="Rectangle 1" width="79" height="37" rx="5" fill="#ED4747"/><path id="NEW" d="M28.0653 9.54545V27H25.2528L17.0284 15.1108H16.8835V27H13.7216V9.54545H16.5511L24.767 21.4432H24.9205V9.54545H28.0653ZM31.5107 27V9.54545H42.8629V12.196H34.6726V16.9347H42.2749V19.5852H34.6726V24.3494H42.9311V27H31.5107ZM49.7621 27L44.8359 9.54545H48.2365L51.3814 22.3722H51.5433L54.9013 9.54545H57.995L61.3615 22.3807H61.5149L64.6598 9.54545H68.0604L63.1342 27H60.0149L56.5206 14.7528H56.3842L52.8814 27H49.7621Z" fill="white"/></g></svg>} 
            </li>
        </div>
        <div className='border-b py-2 mb-2'>
            <li onClick={() => changeOverlay('signUp')} className='cursor-pointer px-4 py-2 hover:bg-neutral-100 font-semibold'>Sing up</li>
            <li onClick={() => changeOverlay('signUp')} className='cursor-pointer px-4 py-2 hover:bg-neutral-100'>Log in</li>
        </div>
        <li className='cursor-pointer px-4 py-2 hover:bg-neutral-100'>
            <a className='pr-[140px] py-2' href="https://www.airbnb.co.uk/giftcards" target='_blank'>
                Gift cards
            </a>
        </li>
        <li onClick={() => router.push('/hosts')} className='cursor-pointer px-4 py-2 hover:bg-neutral-100' >Airbnb your home</li>
        <li className='cursor-pointer px-4 py-2 hover:bg-neutral-100'>
            <a className='pr-[120px] py-2' href="https://www.airbnb.co.uk/help?audience=guest" target='_blank'>
                Help center
            </a>
        </li>
    </ul>
  )
}

export default UserModal