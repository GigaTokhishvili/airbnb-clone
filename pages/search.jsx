import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard';
import MapComp from '@/components/MapComp';
import { format } from 'date-fns';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import londonData from '@/data/londonData';
import Head from 'next/head';
import InfoCardPale from '@/components/InfoCardPale';

function Search({ initialSearchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;

  const [data, setData] = useState();
  const [days, setDays] = useState();
  const [newLoc, setNewLoc] = useState();

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  // to calc number of days ---> last day - first day
  const calcDay = () => {
    const days = (new Date(endDate).getDate()) - (new Date(startDate).getDate()) ;
    setDays(days);
  }

  // theres a weird bug with getServerSideProps im trying to fix, hence me fetching data the normal way
  const fetchData = async () => {
    try {
      const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?where=${encodeURIComponent(`"${location}"`)}&limit=15`);
      const searchData = await response.json();
      setData(searchData);
    } catch (error) {
      console.error(error)
      setData(londonData);
    }
  }
    
  useEffect(() => {
    calcDay();

    if (!initialSearchResults) {
      fetchData()
    } else {
      setData(initialSearchResults)
    }

  }, [initialSearchResults])

  const getNewLoc = (x, y) => {
    setNewLoc([x, y])
  }

  return (
    <div>
      <Head><title>Airbnb Listings (clone)</title></Head>

        <Header 
          placeholder={`${location} | ${range} | ${guests} ${guests == 1 ? 'guest' : 'guests'}`}
        />

        <main className='flex'>
          <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'>300+ Stays - {range} for {guests} {guests == 1 ? 'guest' : 'guests'}</p>

            <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

            <div className='hidden w-80 border-b lg:inline-flex pb-5 space-x-3 text-gray-800 whitespace-nowrap'>
              <p className='button'>Cancellation Flexibility</p>
              <p className='button'>Type of Place</p>
              <p className='button'>Price</p>
              <p className='button'>Rooms and Beds</p>
              <p className='button'>More filters</p>
            </div>

            <div className='flex flex-col '>
            {!initialSearchResults ? 
              <>
                <InfoCardPale />
                <InfoCardPale />
                <InfoCardPale />
                <InfoCardPale />
                <InfoCardPale />
              </>  : 
              initialSearchResults.results.map((item) => (
                <div key={item.id}>
                  <InfoCard
                    key={item.id}
                    img={item.picture_url.url}
                    city={item.smart_location}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    days={days}
                    reviews={item.review_scores_value}
                    numberOfReviewers={item.number_of_reviews}
                    roomType={item.room_type}
                    roomLat={item.latitude}
                    roomLng={item.longitude}
                    roomLocation={(x, y) => getNewLoc(x, y)}
                  />
                </div>
            ))}
              
            </div>

          </section>

          <section className='hidden xl:inline-flex xl:min-w-[600px] xl:h-screen sticky right-0 top-[92px]'>
            <MapComp data={data} initialSearchResults={initialSearchResults} setNewLoc={newLoc} />
          </section>
        </main>

        <Footer />
                
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const { query } = context;

  if (!query || !query.location) {
    return {
      notFound: true,
    };
  }

  const { location } = query;

  try {
    const searchResults = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?where=${encodeURIComponent(`"${location}"`)}&limit=15`).then(res => res.json())

    return {
      props: {
        initialSearchResults: searchResults,
      }
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
