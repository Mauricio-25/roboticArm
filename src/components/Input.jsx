import React, { useState, useRef } from 'react';

function Input({ isVetical }) {
  // Estado para el valor del input
  const [value, setValue] = useState(0);
  // Crear una referencia para el span con id 'spanHorizontal' o 'spanVertical'
  const spanRef = useRef(null);

  // Función para manejar el cambio del valor del input
  function handleChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
    console.log("Nuevo valor del rango:", newValue);

    // Acceder al elemento del DOM usando la referencia
    if (spanRef.current) {
      const spanElement = spanRef.current;
      if (isVetical) {
        // Calcular la posición vertical
        let posicion = (newValue * 100) / 180;
        if (posicion < 30) {
          spanElement.style.transform = `translateY(0%)`;
        } else if (posicion < 40) {
          spanElement.style.transform = `translateY(-50%)`;
        } else if (posicion < 70) {
          spanElement.style.transform = `translateY(-90%)`;
        } else {
          spanElement.style.transform = `translateY(-100%)`;
        }
        spanElement.style.top = `${posicion}%`;
        spanElement.textContent = `${newValue}°`;
      } else {
        // Calcular la posición horizontal
        let posicion = (newValue * 100) / 180;
        if (posicion < 50) {
          spanElement.style.transform = `translateX(0%)`;
        } else {
          spanElement.style.transform = `translateX(-50%)`;
        } 
        spanElement.style.left = `${posicion}%`;
        spanElement.textContent = `${newValue}°`;
      }
    }
  }

  return (
    <>
      {isVetical ? (
        <div className='relative'>
          <div className='flex flex-col items-center justify-center gap-1 text-sm'>
            <p>0°</p>
            <div className='relative'>
              <span
                className='text-[#32B5FF] font-bold text-sm text-center absolute left-[-45px] duration-200 select-none'
                id='spanVertical'
                ref={spanRef}
              >
                0°
              </span>
              <input
                type="range"
                min="0"
                max="180"
                step="10"
                className='inputVertical'
                value={value}
                onChange={handleChange}
              />
            </div>
            <p>180°</p>
          </div>
        </div>
      ) : (
        <div className='relative pt-8 w-full'>
          <span
            className='text-[#4678FB] font-bold text-sm text-center absolute top-0 -translate-x-2/4 duration-200 select-none'
            id='spanHorizontal'
            ref={spanRef}
          >
            0°
          </span>

          <div className='flex flex-col gap-2'>
            <input
              type="range"
              min="0"
              max="180"
              step="10"
              className='inputHorizontal'
              value={value}
              onChange={handleChange}
            />
            <div className='flex justify-between text-sm'>
              <p>0°</p>
              <p>180°</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Input;
