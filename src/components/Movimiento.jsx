import Nav from './Nav'
import Header from './Header'
import Section from './Section'
import Controls from './Controls'

import './../App.css'

function Movimiento() {

  return (
    <>
      <div className='h-full relative grid grid-rows-[1fr_auto] md:w-[650px] md:bg-white overflow-hidden'>
        <main className='h-full'>
          <Header />
          <Section isFull component={<Controls />} />
        </main>
        <Nav></Nav>
      </div>
    </>
  )
}

export default Movimiento
