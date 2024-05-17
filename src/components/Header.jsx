
import React from 'react'

import logo from './../assets/logo.svg'

function Header() {
    return (
        <>
            <header className='flex items-center justify-center gap-4 pt-10 pb-5'>
                <img src={logo} alt="logo de robotic arm" />
                <h1 className='font-bold text-2xl gradient'>RoboticArm</h1>
            </header>
        </>
    )
}

export default Header