import Nav from './Nav'
import Header from './Header'
import Section from './Section'
import Input from './Input'
import Button from './Button'

import './../App.css'

function Index() {

  return (
    <>
      <div className='h-full relative grid grid-rows-[88%_12%] md:w-[650px] md:bg-white overflow-hidden'>
        <main className='h-full overflow-y-auto scroll'>
          <Header />
          <Section h2="Base" component={<Input />} />
          <Section h2="Codo" component={<Input isVetical />} />
          <Section h2="Garra" component={<Button isVetical />} />
        </main>
        <Nav firstSecActive></Nav>
      </div>
    </>
  )
}

export default Index
