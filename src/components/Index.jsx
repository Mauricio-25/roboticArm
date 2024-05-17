import Nav from './Nav'
import Header from './Header'
import Section from './Section'
import Input from './Input'

import './../App.css'

function Index() {

  return (
    <>
      <div className='h-full relative grid grid-rows-[1fr_auto] md:w-[650px] md:bg-white overflow-hidden'>
        <main className='h-full'>
          <Header />
          <Section h2="Base" component={<Input />} />
          <Section h2="Codo" component={<Input isVetical />} />
        </main>
        <Nav firstSecActive></Nav>
      </div>
    </>
  )
}

export default Index
