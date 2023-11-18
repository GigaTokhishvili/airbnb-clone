import React, { useEffect, useState } from 'react'


const PROTECTIONDATA1 = [
    {
        title: 'Guest identity verification',
        airbnb: '✅',
        competitor: '✅',
        data: 'Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.',
        id: 1111,
    },
    {
        title: 'Reservation screening',
        airbnb: '✅',
        competitor: '❌',
        data: 'Our proprietary technology analyses hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.',
        id: 1222,
    },
    {
        title: '$3m damage protection',
        airbnb: '✅',
        competitor: '❌',
        data: 'Airbnb reimburses you for damage caused by guests to your home and belongings and includes these specialised protections:',
        id: 1444,
    }
]

const MIDDATA = [
    {
        title: 'Art & valuables',
        airbnb: '✅',
        competitor: '❌',
        id: 2111,
    },
    {
        title: 'Auto & boat',
        airbnb: '✅',
        competitor: '❌',
        id: 2222,
    },
    {
        title: 'Pet damage',
        airbnb: '✅',
        competitor: '❌',
        id: 2333,
    },
    {
        title: 'Income loss',
        airbnb: '✅',
        competitor: '❌',
        id: 2444,
    },
    {
        title: 'Deep cleaning',
        airbnb: '✅',
        competitor: '❌',
        id: 2555,
    },
]

function HostsProtection() {
    const [windowWidth, setWindowWidth] = useState(1001);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
        <div className='flex flex-col'>

            <table className='w-full text-center border-collapse mb-3'>
                <thead>
                    <tr className='border-b-2'>
                        <th></th>
                        <th className='font-normal sm:py-4 sm:px-5 font-xl sm:font-semibold sm:text-2xl'>Airbnb</th>
                        <th className='font-normal sm:py-4 sm:px-5 font-xl sm:font-semibold sm:text-2xl'>Competitors</th>
                    </tr>
                </thead>

                <tbody>
                    {PROTECTIONDATA1?.map(({ title, airbnb, competitor, data, id }) => (
                    <React.Fragment key={id}>
                        <tr>
                            <td className='text-left font-semibold text-lg py-5'>{title}</td>
                            <td className='text-xl'>{airbnb}</td>
                            <td className='text-xl'>{competitor}</td>
                        </tr>

                        <tr className='border-b-2'>
                            <td colSpan={windowWidth > 1000 ? 1 : 3} className='pb-4 text-left text-gray-500'>{data}</td>
                        </tr>
                    </React.Fragment>
                    ))}

                    {MIDDATA.map(({ title, airbnb, competitor, id}) =>(
                        <tr key={id}>
                            <td className='py-5 border-b-[1px] text-left'>{title}</td>
                            <td className='py-5 border-b-[1px] text-xl'>{airbnb}</td>
                            <td className='py-5 border-b-[1px] text-xl'>{competitor}</td>
                        </tr>
                    ))}

                    <tr>
                        <td className='text-left font-semibold text-lg py-5'>$1m USD liability insurance</td>
                        <td className=' text-xl'>✅</td>
                        <td className=' text-xl'>✅</td>
                    </tr>
                    <tr className='border-b-2'>
                        <td colSpan={windowWidth > 1000 ? 1 : 3} className='pb-4 text-left text-gray-500'>You’re protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.</td>
                    </tr>

                    <tr>
                        <td className='text-left font-semibold text-lg py-5'>24-hour safety line</td>
                        <td className=' text-xl'>✅</td>
                        <td className=' text-xl'>❌</td>
                    </tr>
                    <tr className='border-b-2'>
                        <td colSpan={windowWidth > 1000 ? 1 : 3} className='pb-4 text-left text-gray-500'>If you ever feel unsafe, our app provides one-tap access to specially trained safety agents, day or night.</td>
                    </tr>
                    <tr className=''>
                        <td colSpan={3} className='py-4 text-left text-gray-500'>Comparison is based on public information and free offerings by top competitors as of 22/10. Find details and exclusions <span className='font-semibold underline text-neutral-800'>here.</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HostsProtection