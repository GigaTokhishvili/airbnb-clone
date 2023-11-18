import React, { useState } from 'react';

const QNA = [
    {
        question: 'Is my place right for Airbnb?',
        answer: 'Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, tree houses and more. Even a spare room can be a great place to stay.',
        id: 'q1',
    },
    {
        question: 'Do I have to host all the time?',
        answer: 'Not at all – you control your calendar. You can host once a year, a few nights a month or more often.',
        id: 'q2',
    },
    {
        question: 'How much should I interact with guests?',
        answer: 'It’s up to you. Some Hosts prefer to message guests only at key moments – like sending a short note when they check in – while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.',
        id: 'q3',
    },
    {
        question: 'Any tips on being a great Airbnb Host?',
        answer: 'Getting the basics down goes a long way. Keep your place clean, respond to guests promptly and provide necessary amenities like fresh towels. Some Hosts like adding a personal touch such as putting out fresh flowers or sharing a list of local places to explore – but it’s not required.',
        id: 'q4',
    },
    {
        question: 'What are Airbnb’s fees?',
        answer: 'Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas Airbnb also collects and pays sales and tourilg taxes automatically on your behalf.',
        id: 'q5',
    },
]

function HomeFaq() {
    const [activeQuestion, setAqctiveQuestion] = useState('');

    const handleClick = (e) => {
        e.target.id === activeQuestion ? setAqctiveQuestion('') : setAqctiveQuestion(e.target.id);
    }

  return (
    <div className='lg:max-w-[1200px] lg:flex lg:justify-between'>
        <h1 className='font-semibold text-3xl text-neutral-800 mb-10 lg:text-5xl'>Your questions, <br/> answered</h1>

        <div className='lg:flex lg:flex-col lg:w-1/2'>
            {QNA.map(({ question, answer, id}) => (
                <div key={id} id={id} onClick={handleClick} className='cursor-pointer border-b border-neutral-300 pb-6 last:border-b-0'>
                    <div id={id} className='flex justify-between py-6 lg:text-2xl'>
                        {question}
                        <svg id={id} style={{transform: `${activeQuestion === id ? 'rotate(180deg)' : 'rotate(0)'}`}} className='block h-4 w-4 fill-none stroke-current overflow-visible transition transform duration-300' strokeWidth={4} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path id={id} fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path></svg>
                    </div>
                    <div>
                        <div className='question lg:text-lg' style={{maxHeight: `${activeQuestion === id ? '12rem' : '0px'}`}}
                            >{answer}</div>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default HomeFaq;