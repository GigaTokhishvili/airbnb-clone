import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>NewsRoom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Community</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>It is just a clone</p>
            <p>Treat yourself like someone</p>
            <p>youre responsible for helping</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Tell the truth</p>
            <p>or, at least,</p>
            <p>Dont Lie</p>
            <p>Pursue what is meaningful</p>
            <p>Not what is expedient</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Terms of service</p>
            <p>Stand up straight</p>
            <p>with your shoulders back</p>
        </div>
        

    </div>
  )
}

export default Footer