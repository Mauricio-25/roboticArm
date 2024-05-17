import React from 'react'

function Input({isVetical}) {



    return (
        <>
            
            {isVetical ? (
                <div className='relative'>
                    <span className='text-[#32B5FF] font-bold text-sm text-center absolute left-1/2 -translate-x-[45px]'>0°</span>
                    
                    <div className='flex flex-col items-center justify-center gap-1 text-sm'>
                        <p>0°</p>
                        <input type="range" min="0" max="180" step="10" className='inputVertical'/>
                        <p>180°</p>
                    </div>
                </div>
            ) : (
                <div className='relative pt-8 w-full'>
                    <span className='text-[#4678FB] font-bold text-sm text-center absolute top-0'>0°</span>

                    <div className='flex flex-col gap-2'>
                        <input type="range" min="0" max="180" step="10" className='inputHorizontal' />
                        <div className='flex justify-between text-sm'>
                            <p>0°</p>
                            <p>180°</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Input