import React from 'react'
import Carousel from './carousel'
import Motive from './motive'
import About from './about'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
        <Carousel/>  
        <Motive/>
        <About/>
    </div>
  )
}

export default Home
