import { useState } from 'react'
import viteLogo from '/vite.svg'

import Nav from './components/Nav'
import Header from './components/Header'
import Section from './components/Section'
import Input from './components/Input'

import './App.css'

function App() {

  return (
    <>
      <div className='h-full relative grid grid-rows-[1fr_auto] md:w-[650px] md:bg-white overflow-hidden'>
        <main>
          <Header />
          <Section h2="Base" component={<Input />} />
          <Section h2="Codo" component={<Input isVetical />} />
        </main>
        <Nav></Nav>
      </div>
    </>
  )
}

export default App
