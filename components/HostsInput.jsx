import React, { useEffect, useState } from 'react'

function HostsInput() {
    const [inputValue, setInputValue] = useState(7);
    const [inputPercentage, setInputPercentage] = useState(50);
    const [inputWidth, setInputWidth] = useState(408);
    const [pixels, setPixels] = useState();
    const [tooltipPos, setTooltipPos] = useState(70);
    const [tooltipOp, setTooltipoP] = useState(0);
    const [visibility, setVisibility] = useState('hidden');
    
    useEffect(() => {
        const thumbWidth = 24;
        const inputMin = 1;
        const inputMax = 30   
        const fraction = (inputValue - 1) / (inputMax - inputMin);
        
        // for the input background gradient 
        setInputPercentage(fraction * 100);

        //increment per input value 
        const pixelValue = inputWidth * fraction + ((0.5 - fraction) * thumbWidth);

        // tooltip width - 112, 
        if (inputWidth/29 * (inputValue - 1) > inputWidth - 56) {
            setPixels(inputWidth - 56);

        } else if (inputWidth/29 * (inputValue - 1) < 56) {
            setPixels(56)

        } else {
            setPixels(pixelValue)
           
        };
     
    }, [inputValue, inputWidth])

    return (
        <div className='flex flex-col justify-center items-center text-center pt-6 xl:w-full xl:px-24'>
            <span className='text-4xl font-semibold text-rose-500 sm:text-5xl'>Airbnb it.</span>
            <span className='text-4xl font-semibold sm:text-5xl'>You could earn</span>
            <span className='text-6xl font-bold text-slate-900 pt-5 sm:text-7xl'>£{inputValue * 47}</span>

            <div className='w-full relative h-24 pt-7'>
                <span className='mt-5 mb-10 duration-200 delay-100' style={{opacity: `${!tooltipOp ? 1 : 0}`}}>
                    <span className='font-semibold underline cursor-pointer'>{inputValue} {inputValue > 1 ? 'nights' : 'night'}</span> an estimated £47 a night
                </span>

                <div 
                aria-hidden={true}
                className='absolute translate-y-full scale-50 w-28 whitespace-nowrap top-5 font-semibold text-white bg-neutral-800 rounded-3xl transition transform duration-75 delay-100 px-6 pt-[10px] pb-3'
                style={{left: `${(pixels)}px`, transform: `translate(-56px, ${tooltipPos}%)`, opacity: tooltipOp, visibility: visibility}}
                
                >{inputValue} {inputValue > 1 ? 'nights' : 'night'}</div>
            </div>

            <input 
                type="range"
                step={1} 
                min={1} 
                max={30} 
                onChange={(e) => {
                    setInputValue(e.target.value)
                    setInputWidth(e.target.clientWidth);
                }}
                onMouseDown={(e) => {
                    setInputWidth(e.target.clientWidth);
                    setTooltipPos(0);
                    setTooltipoP(1)
                    setVisibility('visible');
                }}
                onMouseUp={() => {
                    setTooltipPos(70);
                    setTooltipoP(0)
                    setVisibility('hidden');
                }}
                onTouchStart={(e) => {
                    setInputWidth(e.target.clientWidth);
                    setTooltipPos(0);
                    setTooltipoP(1)
                    setVisibility('visible');
                }}
                onTouchEnd={() => {
                    setTooltipPos(70);
                    setTooltipoP(0)
                    setVisibility('hidden');
                }}
                    
                value={inputValue} 
                className='inputSlider z-10 outline-none w-full h-1 mb-6 rounded-full appearance-none cursor-pointer' 
                style={{background: `linear-gradient(to right, #262626, #262626 0, #262626 ${inputPercentage}%, #CBD5E1 ${inputPercentage}%, #CBD5E1 0%)`}}
            />

            <span className='text-slate-600 underline cursor-pointer mb-8'>Learn how we estimate your earnings</span>

            <div className='my-5 flex w-full items-center px-5 py-3 tracking-tighter rounded-full border cursor-pointer'>
                <svg className='block fill-none h-4 w-4 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" stroke='rgb(255, 56, 92)' strokeWidth='4' overflow='visible'><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                <div className='flex flex-col ml-5 leading-5'>
                    <span className='text-left'>Tbilisi</span>
                    <span className='text-gray-500'>Entire place • 2 bedrooms</span>
                </div>
            </div>
        </div>
    )
}

export default HostsInput