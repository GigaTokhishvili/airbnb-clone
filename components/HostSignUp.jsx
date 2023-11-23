import React, { useState } from 'react';
import countryData from '../data/countryData.js';

function HostSignUp({ signUp }) {
    const [countryValue, setCountryValue] = useState('United Kingdom (+44)');
    const [phoneValue, setPhoneValue] = useState();
    const [selectedCountry, setSelectedCountry] = useState(93);
    const [typing, setTyping] = useState(150);

    const handleChange = (e) => {
            const input = e.target;
            const formattedValue = input.value.replace(/[^0-9\s+\-()]/g, '');
            input.value = formattedValue;
            setPhoneValue(formattedValue);
    }
    return (
        <div onClick={() => signUp()} className='fixed left-0 top-0 w-full h-full bg-neutral-600 bg-opacity-50 z-[100] flex justify-center items-center'>

            <div onClick={e => e.stopPropagation()} className='w-full h-fit relative bg-white shadow-xl rounded-xl slideEnter sm:max-h-full sm:max-w-[550px]'>

                {/* sign up header */}
                <div className='w-full min-h-[64px] p-6 border-b border-slate-200 flex justify-center'>
                    <button onClick={() => signUp()} className='absolute left-4 rounded-full w-7 h-7 flex justify-center items-center hover:bg-slate-100'>
                        <svg className=' block fill-none h-4 w-4 stroke-current overflow-visible' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" strokeWidth={3}><path d="m6 6 20 20M26 6 6 26"></path></svg>
                    </button>
                    <h1 className='justify-self-center font-bold tracking-tight'>Log in or sign up</h1>
                </div>

                {/* sign up body */}
                <div className='p-6 h-fit'>
                    <h1 className='font-semibold mb-5 sm:text-2xl'>Welcome to Airbnb</h1>
                    <div>
                        <div>

                            {/* top input - country */}
                            <label htmlFor="countries" className='relative'>
                                <div className='text-slate-500 text-xs absolute left-[17px]'>Country/Region</div>

                                <select 
                                    name="countries" 
                                    id="countries" 
                                    className='w-full h-14 pt-2 px-4 border-[1px] border-slate-400 rounded-t-lg border-b-0 appearance-none '
                                    value={countryValue}
                                    onChange={(e) => {
                                        setCountryValue(e.target.value);
                                        setSelectedCountry(parseFloat(e.target.value));
                                    }}
                                >
                                    {countryData.map(({ value, label }) => (
                                        <option
                                            className='bg-white text-black' 
                                            key={value} 
                                            value={value}
                                        >{label}
                                        </option>

                                    ))}
                                </select>
                            </label>
                            
                            {/* bottom input - phone numb */}
                            <div className='w-full h-14'>
                                <label htmlFor="countries" className='relative'>
                                    {typing == 100 && <div className='absolute left-[17px] top-[-1px]'>{selectedCountry}</div>}
                                    <div className='text-slate-500 pointer-events-none scale-100 text-xs absolute left-[17px] origin-top-left transition transform duration-150' style={{transform: `scale(${typing}%) translateY(${typing-90}%)`}}>Phone number</div>

                                    <input 
                                    onChange={handleChange}
                                    onFocus={() => setTyping(100)}
                                    onBlur={() => setTyping(150)}
                                    name='phoneInput' 
                                    type="tel" 
                                    inputMode='tel' 
                                    autoCapitalize='tel-national' 
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                                    className='z-10 w-full pl-12 h-14 pt-2 px-4 border-[1px] border-slate-400 appearance-none rounded-b-lg'/>
                                    
                                </label>
                            </div>
                        </div>

                    </div>
                    <p className='text-xs text-gray-700'>We’ll call or text you to confirm your number. Standard message and data rates apply. 
                        <a href='https://www.airbnb.co.uk/help/article/2855' target='_blank' className='underline text-black font-semibold cursor-pointer'>Privacy Policy</a>
                    </p>

                    <button className='w-full my-5 flex justify-center bg-gradient-to-r from-rose-600 via-rose-600 to-pink-600 px-6 py-3 gap-2 text-white font-semibold rounded-lg hover:shadow-lg active:scale-95 transition transform duration-75 ease-out'>
                        Continue
                    </button>

                    <div className='signUpDiv text-xs'>or</div>

                    <button className='mt-2 mb-4 cursor-pointer select-none w-full relative flex items-center justify-center border-[1px] border-neutral-800 px-4 py-3 text-center font-medium rounded-lg  hover:bg-gray-100 active:scale-95 duration-150'>
                        <svg className='absolute left-5 block h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path fill="#1877F2" d="M32 0v32H0V0z"></path><path fill="#FFF" d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.63h4.06V32h5V20.62h3.73l.7-4.62z"></path></svg>
                        Continue with Facebook
                    </button>

                    <button className='mt-2 mb-4 cursor-pointer select-none w-full relative flex items-center justify-center border-[1px] border-neutral-800 px-4 py-3 text-center font-medium rounded-lg  hover:bg-gray-100 active:scale-95 duration-150'>
                        <svg className='absolute left-5 block h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path fill="#4285f4" d="M24.12 25c2.82-2.63 4.07-7 3.32-11.19H16.25v4.63h6.37A5.26 5.26 0 0 1 20.25 22z"></path><path fill="#34a853" d="M5.62 21.31A12 12 0 0 0 24.12 25l-3.87-3a7.16 7.16 0 0 1-10.69-3.75z"></path><path fill="#fbbc02" d="M9.56 18.25c-.5-1.56-.5-3 0-4.56l-3.94-3.07a12.08 12.08 0 0 0 0 10.7z"></path><path fill="#ea4335" d="M9.56 13.69c1.38-4.32 7.25-6.82 11.19-3.13l3.44-3.37a11.8 11.8 0 0 0-18.57 3.43l3.94 3.07z"></path></svg>
                        Continue with Google
                    </button>

                    <button className='mt-2 mb-4 cursor-pointer select-none w-full relative flex items-center justify-center border-[1px] border-neutral-800 px-4 py-3 text-center font-medium rounded-lg  hover:bg-gray-100 active:scale-95 duration-150'>
                        <svg className='absolute left-5 block h-5 w-5 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true" focusable="false"><path d="m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z"></path></svg>
                        Continue with Apple
                    </button>

                    <button className='mt-2 cursor-pointer select-none w-full relative flex items-center justify-center border-[1px] border-neutral-800 px-4 py-3 text-center font-medium rounded-lg  hover:bg-gray-100 active:scale-95 duration-150'>
                        <svg className='absolute left-5 block w-5 h-5 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="M30.51 5.88A5.06 5.06 0 0 0 26 3H6a5.06 5.06 0 0 0-4.51 2.88A4.94 4.94 0 0 0 1 8v16a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V8a4.94 4.94 0 0 0-.49-2.12ZM6 5h20a2.97 2.97 0 0 1 1.77.6L17.95 14a2.98 2.98 0 0 1-3.9 0L4.23 5.6A2.97 2.97 0 0 1 6 5Zm23 19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a2.97 2.97 0 0 1 .1-.74l9.65 8.27a4.97 4.97 0 0 0 6.5 0l9.65-8.27A2.97 2.97 0 0 1 29 8Z"></path></svg>
                        Continue with Email
                    </button>
                </div>

            </div>


        </div>
    )
}

export default HostSignUp