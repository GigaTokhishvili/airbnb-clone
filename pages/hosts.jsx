import MapComp from '@/components/MapComp'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import HostsInput from '@/components/HostsInput';
import Head from 'next/head';
import HostsProtection from '@/components/HostsProtection';
import HomeFaq from '@/components/HomeFaq';
import HomeSignUp from '@/components/HomeSignUp';

function Hosts() {
    const router = useRouter();
    const [overlay, setOverlay] = useState('');

    // const [userLat, setUserLat] = useState();
    // const [userLong, setUserLong] = useState();

    // if(navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         setUserLat(position.coords.latitude)
    //         setUserLong(position.coords.longitude)
    //       console.log(position.coords.latitude, position.coords.longitude)
    //     })
    // }

    useEffect(() => {
        overlay ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [overlay]);
 

  return (
      <div className='overflow-hidden'>
        <Head><title>Become a Host (clone)</title></Head>
        

        <header className='sticky flex xl:justify-center items-center bg-white w-full top-0 z-50 shadow-md py-5 px-6'>
            <nav className='flex md:w-[1200px] justify-between'>
                <div className='relative h-10 w-28 flex items-center my-auto'>
                <Image
                    onClick={() => router.push('/')}
                    src='https://links.papareact.com/qd3'
                    fill='false'
                    alt='airbnb logo'
                    style={{objectFit: "contain"}}
                    sizes="(max-width: 768px) 100px, (max-width: 100px) 50vw, 33vw"
                    className='cursor-pointer'
                    />
                </div>

                <div className='hidden items-center justify-center gap-6 lg:flex'>
                    <h2 className='hidden lg:inline-flex font-semibold'>Ready to Airbnb it?</h2>
                    <button onClick={() => setOverlay('signUp')} className='bg-gradient-to-r from-rose-600 via-rose-600 to-rose-600 px-6 py-3 flex gap-2 text-white rounded-lg hover:shadow-lg active:scale-95 transition transform duration-300 ease-out'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0639 7.63177V11.1393H7.51713V13.028H11.0639V16.5356H13.0048V13.028H16.5516V11.1393H13.0048V7.63177H11.0639Z" fill="white"></path><path d="M13.734 0.684168C13.2611 0.240904 12.6404 0 12 0C11.3596 0 10.7389 0.240904 10.266 0.674532L0 10.7251L1.36946 12.0549L2.10837 11.3321V19.9661C2.10837 20.4094 2.29557 20.8334 2.61084 21.1418C2.92611 21.4501 3.35961 21.6332 3.81281 21.6332H20.1773C20.6305 21.6332 21.064 21.4598 21.3892 21.1418C21.7143 20.8238 21.8916 20.3998 21.8916 19.9565V11.3032L22.6305 12.0259L24 10.7251L13.734 0.684168ZM4.03941 19.7542V9.4049L11.6355 1.97542C11.6847 1.92723 11.734 1.88869 11.803 1.86942C11.8621 1.84051 11.931 1.83087 12 1.83087H12.0099C12.0788 1.83087 12.1478 1.84051 12.2069 1.86942C12.266 1.89833 12.3251 1.92723 12.3744 1.97542L19.9704 9.4049V19.7542H4.03941Z" fill="white"></path></svg>
                        Airbnb Setup
                    </button>
                </div>
            </nav>
        </header>
        
        <main className='mx-auto mt-5 flex flex-col items-center gap-6 px-6 xl:px-0 xl:w-[1200px]'>

            <section className='min-h-[600px] w-full mb-10 sm:mb-24 xl:flex xl:mt-24 xl:justify-between'>
                <HostsInput />

                <div className='w-full h-[370px] sm:inline-flex lg:min-w-[600px] sm:h-[600px] rounded-2xl overflow-hidden'>
                    <MapComp  />
                </div>
            </section>

            <section>
                <span className='flex pl-6 w-72 sm:justify-center font-semibold text-2xl sm:w-full sm:text-5xl sm:text-center'>Airbnb it easily with Airbnb Setup</span>

                <div className='relative mt-5 h-[350px] w-screen flex items-center my-auto xl:w-full xl:h-[600px]'>
                    <Image
                        src='https://a0.muscache.com/im/pictures/54b6ce1e-4b3f-409d-a0b7-8717b02bec7e.jpg?im_w=2560&im_q=highq'
                        fill='false'
                        alt=''
                        style={{objectFit: "cover"}}
                        sizes="(min-width: 768px) 1920px"
                    />
                </div>

                <div className='pb-10 px-6 sm:flex sm:gap-16 mt-6'>
                    <div className='pb-5'>
                        <h5 className='font-semibold'>One-to-one guidance from a Superhost</h5>
                        <p className='text-gray-500'>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</p>
                    </div>

                    <div className='pb-5'>
                        <h5 className='font-semibold'>An experienced guest for your first booking</h5>
                        <p className='text-gray-500'>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</p>
                    </div>

                    <div className='pb-5'>
                        <h5 className='font-semibold'>Specialised support from Airbnb</h5>
                        <p className='text-gray-500'>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</p>
                    </div>
                </div>
            </section>


            <section className='md:w-[850px] flex flex-col justify-center sm:items-center'>
            
                <div className='relative h-24 mr-auto w-48 flex items-center sm:m-auto sm:w-44 sm:h-30'>
                    <Image
                        src='https://a0.muscache.com/im/pictures/5318dacc-6476-4195-8dd2-b9a66fa2efbb.jpg?im_w=480&im_q=highq'
                        fill='false'
                        alt=''
                        style={{objectFit: "contain"}}
                        sizes="(min-width: 768px) 1920px"
                    />
                </div>

                <h1 className='text-left mr-auto text-2xl font-semibold mb-10 xl:text-center xl:mb-12 xl:m-auto xl:text-[45px]'>Airbnb it with top‑to‑bottom protection</h1>

                <HostsProtection />
                <button className='cursor-pointer select-none w-fit border-[1px] border-neutral-800 px-4 py-2 rounded-lg  hover:bg-gray-100 active:scale-95 duration-150'>Learn more</button>
            </section>

            <section className='w-screen px-6 py-12 bg-gray-100 border-b-[1px] border-gray-300 sm:py-20 sm:flex sm:flex-col sm:items-center'>
                <HomeFaq />

                <div className='w-full h-96 overflow-hidden rounded-2xl bg-white sm:max-w-[1200px] sm:flex'>
                    <div className='relative h-[200px] w-full flex items-start sm:w-1/2 sm:h-[auto]'>
                        <Image
                            src='https://a0.muscache.com/im/pictures/c19751e5-cd4f-41d0-898f-2580b60cae08.jpg?im_w=1200&im_q=highq'
                            fill='false'
                            alt=''
                            style={{objectFit: "cover"}}
                            sizes="(min-width: 768px) 1200px"
                        />
                    </div>
                    <div className='px-6 mt-4 flex flex-col justify-center items-start md:gap-4 md:pl-16'>
                        <h1 className='text-2xl font-semibold sm:text-5xl'>Still have questions?</h1>
                        <p className=' text-lg text-neutral-500'>Get answers from an experienced Superhost near you</p>
                        <button className='mt-3 cursor-pointer select-none w-fit border-[1px] border-neutral-800 px-4 py-2 rounded-lg  hover:bg-gray-100 active:scale-95 duration-150'>Match with a superhost</button>
                    </div>
                </div>
            </section>

            {overlay === 'signUp' && <HomeSignUp signUp={() => setOverlay('')} /> }

        </main>
        <Footer />

    </div>
  )
}

export default Hosts;