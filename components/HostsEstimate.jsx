import React from 'react'

function HostsEstimate({ offEstimate }) {
  return (
    <div onClick={() => offEstimate()} className='absolute left-0 top-0 w-full h-full px-6 bg-neutral-600 bg-opacity-50 z-[100] flex justify-center items-center'>
        <div onClick={e => e.stopPropagation()} className='w-full h-fit relative bg-white shadow-xl rounded-xl slideEnter sm:max-h-full sm:max-w-[480px]'>

            <div className='w-full min-h-[64px] p-6'>
                <button onClick={() => offEstimate()} className='absolute left-4 rounded-full w-7 h-7 flex justify-center items-center hover:bg-slate-100'>
                    <svg className=' block fill-none h-4 w-4 stroke-current overflow-visible' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" strokeWidth={3}><path d="m6 6 20 20M26 6 6 26"></path></svg>
                </button>
            </div>
            <div className='px-6 h-fit'>
                <h1 className='font-semibold mb-5 sm:text-3xl'>How we estimate your earning potential</h1>
            </div>
            <div className='px-6 leading-5'>
                <p>To estimate your earnings, we review the past 12 months of booking data from similar Airbnb listings. We choose these listings based on the information you share about your place. If you enter an address, you'll get a more specific estimate based on the listings closest to you. If you enter an area, we look at the top 50% of similar listings in that area, based on their earnings.</p>

                <p className='pt-5'>
                    Based on these similar listings, we estimate the average nightly earnings and multiply that number by the number of nights you indicate you will host. We also provide the average number of nights booked per month in your area, assuming places are available on Airbnb every night of the month. (Nightly earnings are the price set by each Host minus the <a className='text-black font-semibold underline' href="https://www.airbnb.co.uk/help/article/1857" target='_blank'>Airbnb Host Service fee</a>. We don't subtract taxes or hosting expenses.)
                </p>

                <p className='pt-5'>
                    Your actual earnings will depend on several factors, including your availability, price and the demand in your area. Your ability to host may also depend on local laws. Learn more about <a className='text-black font-semibold underline' href="https://www.airbnb.co.uk/help/article/376" target='_blank'>responsible hosting</a>.
                </p>

                <p className='pt-5 pb-10'>
                    These earning estimates are not an appraisal or estimate of property value.
                </p>
            </div>
        </div>
    </div>
  )
}

export default HostsEstimate