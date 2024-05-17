
import React from 'react'

import Li from './Li'

import iconArmActive from './../assets/icon-arm-active.svg'
import iconCar from './../assets/icon-car.svg'
import iconArm from './../assets/icon-arm.svg'
import iconCarActive from './../assets/icon-car-active.svg'

function Nav({ firstSecActive }) {
    let url1 = "./index.html";
    let url2 = "./movimiento.html";

    return (
        <>
          <nav className='shadow-[0_2px_15px_rgba(188,188,188,1)]'>
            <ul className='grid grid-cols-2 items-center'>
              {firstSecActive ? (
                <>
                  <Li texto="Articulaciones" icon={iconArmActive} url={url1} isActive />
                  <Li texto="Movimiento" icon={iconCar} url={url2} />
                </>
              ) : (
                <>
                  <Li texto="Articulaciones" icon={iconArm} url={url1} />
                  <Li texto="Movimiento" icon={iconCarActive} url={url2} isActive />
                </>
              )}
            </ul>
          </nav>
        </>
    )
}

export default Nav