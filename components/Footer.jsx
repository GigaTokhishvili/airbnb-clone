import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Support</h5>
            <p className='cursor-pointer'>Help Centre</p>
            <p className='cursor-pointer'>AirCover</p>
            <p className='cursor-pointer'>Anti-discrimination</p>
            <p className='cursor-pointer'>Cancellation options</p>
            <p className='cursor-pointer'>Report neighbourhood concern</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Hosting</h5>
            <p className='cursor-pointer'>Airbnb your home</p>
            <p className='cursor-pointer'>AirCover for Hosts</p>
            <p className='cursor-pointer'>Hosting resources</p>
            <p className='cursor-pointer'>Community forum</p>
            <p className='cursor-pointer'>Hosting responsibility</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Airbnb</h5>
            <p className='cursor-pointer'>Newsroom</p>
            <p className='cursor-pointer'>New Features</p>
            <p className='cursor-pointer'>Careers</p>
            <p className='cursor-pointer'>Investors</p>
            <p className='cursor-pointer'>Gift cards</p>
            <p className='cursor-pointer'>This is but a clone</p>
        </div>

    </div>
  )
}

export default Footer