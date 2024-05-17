import React from 'react'

import iconArrow from './../assets/icon-arrow.svg'

function Circle( {isFlotante, direccion, color, posicion} ) {
    return (
        <>
            {isFlotante ? (
                <>
                    <div className={`absolute rounded-full bg-[${color}] w-[70px] h-[70px] flex justify-center items-center shadow-[3px_3px_0_#D7D7D7] ${posicion} cursor-pointer active:shadow-none active:bg-[#2183BA] select-none`}>
                        <img src={iconArrow} alt="icon arrow" className={`rotate-[${direccion}deg]`} />
                    </div>
                </>
            ) : (
                <>
                    <div className={`rounded-full bg-[${color}] w-[70px] h-[70px] flex justify-center items-center shadow-[3px_3px_0_#D7D7D7] cursor-pointer active:shadow-none active:bg-[#355BBF] select-none`}>
                        <img src={iconArrow} alt="icon arrow" className={`rotate-[${direccion}deg]`} />
                    </div>
                </>
            )}
        </>
    )
}

export default Circle