import React from 'react'
import Carousal from "./Carousal"
import NatoursPromise from './NatoursPromise'
import MostPicked from './MostPicked'
import Footer from './Footer'


function Home() {
  return (
    <>
       <Carousal/>
       <NatoursPromise/>
       <MostPicked/>
       <Footer/>
    </>
  )
}

export default Home
