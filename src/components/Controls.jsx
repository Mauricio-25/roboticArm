import React from 'react'
import Circle from './Circle'

function Controls() {
    return (
        <>
            <div className='relative flex flex-col gap-11 h-full justify-center -mt-[160px]'>
                <Circle direccion="0" color="#4678FB" />
                <Circle direccion="90" color="#32B5FF" isFlotante posicion="translate-x-[70px]" />
                <Circle direccion="180" color="#4678FB" />
                <Circle direccion="270" color="#32B5FF" isFlotante posicion="-translate-x-[70px]" />
            </div>
        </>
    )
}

export default Controls