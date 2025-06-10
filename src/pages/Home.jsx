import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonail from '../components/Testimonail'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <>
        <Hero/>
        <FeaturedDestination />
        <ExclusiveOffer />
        <Testimonail />
        <Newsletter />
        </>
      
    </div>
  )
}

export default Home
