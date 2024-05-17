import React from 'react'

function Li({texto, icon, isActive, url}) {
    return (
        <>
            <li className=''>
                <a href={url} className='py-5 flex justify-center items-center'>
                    <button className="flex flex-col items-center justify-center gap-2 hover:scale-110 duration-300">
                        <img src={icon} alt="icon" />
                        {isActive ? (
                            <p className='text-sm text-[#4678FB] font-semibold'>{texto}</p>
                        ) : (
                            <p className='text-sm font-medium'>{texto}</p>
                        )}
                    </button>
                </a>
            </li>
        </>
    )
}

export default Li