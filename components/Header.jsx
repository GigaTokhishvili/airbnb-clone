import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import UserModal from './UserModal';
import HostSignUp from './HostSignUp';
import WinterFeatures from './WinterFeatures';

function Header( {placeholder} ) {
  const [toggleModal, setToggleModal] = useState(false);
  const [overlay, setOverlay] = useState('');
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
  }

  const search = () => {
    if (searchInput.length < 2) return
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
    <header onKeyDown={e => e.key === 'Enter' ? search() : null} className='sticky w-full h-20 top-0 flex flex-col z-50 gap-2 bg-white shadow-md py-5 sm:h-fit xl:px-60'>

        <nav className='flex px-8 h-fit justify-between'>
          <div className='relative flex items-center h-10 w-24 sm:w-36 cursor-pointer my-auto'>
            <Image
              onClick={() => router.push('/')}
              src='https://links.papareact.com/qd3'
              fill='false'
              alt='airbnb logo'
              style={{objectFit: "contain"}}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className='flex w-32 items-center md:w-[450px] md:border-2 rounded-full py-2 md:shadow-sm'>
            <input 
            value={searchInput}
            onChange={handleChange}
            type='text' 
            placeholder={placeholder || 'Start your search'}
            className='overflow-hidden flex-grow rounded-full pl-1 sm:pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'/>
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
          </div>

          <div className='flex items-center justify-end sm:space-x-4 text-gray-500'>
            <p onClick={() => router.push('/hosts')} className='hidden animate-bounce md:inline cursor-pointer whitespace-nowrap hover:bg-neutral-100 rounded-full p-3 transition transform duration-300 ease-out'>
              Airbnb your home
            </p>
            <GlobeAltIcon className='hidden lg:inline-block h-6 cursor-pointer' />

            <button 
              onClick={() => setToggleModal(!toggleModal)}
              onBlur={() => setTimeout(() => {setToggleModal(false)}, 100)} 
              className='hidden sm:flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-lg transition transform duration-300 ease-out'>
              <MenuIcon className='h-6' />
              <UserCircleIcon className='h-6'
            />
            </button>
          </div>

          {toggleModal && <UserModal changeOverlay={(x) => setOverlay(x)} />}
          {overlay === 'signUp' && <HostSignUp signUp={() => setOverlay('')} /> }
          {overlay === 'winterFeatures' && <WinterFeatures changeOverlay={(x) => setOverlay(x)} /> }

        </nav>

        {searchInput && 
        <div className='flex w-full bg-white sm:w-auto flex-col mx-auto'>
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
            <div className='flex pb-3 shadow-sm sm:shadow-none sm:pb-0'>
              <button onClick={() => setSearchInput('')} className='flex-grow text-gray-500'>Cancel</button>
              <button onClick={search} className='flex-grow text-red-400'>Search</button>
            </div>
        </div>}
      <div className="fixed w-11 bg-white rounded-full h-11 right-5 bottom-5 sm:hidden">
        <UserCircleIcon onClick={() => setOverlay('signUp')} className="fill-rose-500" />
      </div>
    </header>
  )
}

export default Header;