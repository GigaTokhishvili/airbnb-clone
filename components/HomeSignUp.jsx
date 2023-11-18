import React, { useState } from 'react';
import countryData from '../data/countryData.js';

function HomeSignUp({ signUp }) {
    const [countryValue, setCountryValue] = useState('Georgia');
    const [phoneValue, setPhoneValue] = useState();
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleChange = (e) => {
            const input = e.target;
            const formattedValue = input.value.replace(/[^0-9\s+\-()]/g, '');
            input.value = formattedValue;
            setPhoneValue(formattedValue);
    }
    return (
        <div onClick={(e) => signUp()} className='absolute left-0 top-0 w-full h-full bg-slate-600 bg-opacity-50 z-[100] flex justify-center items-center'>

            <div onClick={e => e.stopPropagation()} className='w-full h-1/2 relative bg-white shadow-xl rounded-xl sm:max-h-full sm:max-w-[550px]'>

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
                            <label htmlFor="countries" className='relative'>
                                <div className='text-slate-500 text-xs absolute left-[17px]'>Country/Region</div>

                                <select 
                                    name="countries" 
                                    id="countries" 
                                    className='w-full h-14 pt-2 px-4 border-[1px] border-slate-400 rounded-lg appearance-none '
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
                            
                            <label htmlFor="countries" className='relative'>
                                <div className='text-slate-500 text-xs absolute left-[17px]'>Country/Region</div>

                                <input onChange={handleChange} name='phoneInput' type="tel" inputMode='tel' autoCapitalize='tel-national' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='w-full h-14 pt-2 px-4 border-[1px] border-slate-400 rounded-lg appearance-none '/>
                            
                            </label>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default HomeSignUp