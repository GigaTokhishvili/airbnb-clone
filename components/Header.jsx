import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function Header( {placeholder, writing, headerClosing} ) {
  const [searchInput, setSearchInput] = useState('');
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    // writing(searchInput);
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      }
    })
    setSearchInput('');
  }

  return (
    <header onKeyDown={e => e.key === 'Enter' ? search() : null} className='sticky w-screen top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
          <Image
            onClick={() => router.push('/')}
            src='https://links.papareact.com/qd3'
            fill='false'
            alt='airbnb logo'
            style={{objectFit: "contain"}}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
          <input 
          value={searchInput}
          onChange={handleChange}
          type='text' 
          placeholder={placeholder || 'Start your search'}
          className=' flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'/>
          <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>

        <div className='flex items-center justify-end space-x-4 text-gray-500'>
          <p onClick={() => router.push('/hosts')} className='hidden animate-bounce md:inline cursor-pointer hover:bg-neutral-100 rounded-full p-3 transition transform duration-300 ease-out'>
            Become a host
          </p>
          <GlobeAltIcon className='h-6 cursor-pointer' />

          <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-lg transition transform duration-300 ease-out'>
            <MenuIcon className='h-6' />
            <UserCircleIcon className='h-6' />
          </div>
        </div>

        {searchInput && 
        <div className='flex flex-col col-span-3 mx-auto'>
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
              onChange={(handleSelect)}
            />
            <div className='flex items-center border-b mb-4'>
              <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>

              <UsersIcon className='h-5' />
              <input 
                value={guests}
                min={1}
                onChange={(e) => setGuests(e.target.value)}
                type="number" 
                className='w-12 pl-2 text-lg outline-none text-red-400'
              />
            </div>
            <div className='flex'>
              <button onClick={() => setSearchInput('')} className='flex-grow text-gray-500'>Cancel</button>
              <button onClick={search} className='flex-grow text-red-400'>Search</button>
              </div>
        </div>}
    </header>
  )
}

export default Header;