
import React from 'react'

function Section({ h2, component, isFull}) {
    return (
        <>
            {isFull ? ( 
                <>
                    <section className='px-9 py-8 flex flex-col gap-5 h-full'>
                        <h2 className='font-semibold'>{h2}</h2>
                        <div className='flex justify-center items-center h-full'>
                            {component}
                        </div>
                    </section>
                </>
            ) : (
                <>
                    <section className='px-9 py-8 flex flex-col gap-5'>
                        <h2 className='font-semibold'>{h2}</h2>
                        <div className='flex justify-center items-center'>
                            {component}
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default Section