import React, { useState } from 'react';

function Button() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-2'>
                <p>{isOpen ? 'Abierto' : 'Cerrado'}</p>
                <button 
                    onClick={toggleOpen} 
                    className={`bg-${isOpen ? '[#0076CC]' : '[#C6C6C6]'} rounded-[20px] w-11 h-[24px] relative transition-colors`}
                >
                    <div 
                        className={`rounded-full w-[18px] h-[18px] bg-white absolute top-[3px] transition-all ${isOpen ? 'left-[23px]' : 'left-[3px]'}`}
                    ></div>
                </button>
            </div>
        </>
    )
}

export default Button