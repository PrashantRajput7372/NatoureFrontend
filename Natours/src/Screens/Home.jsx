import React,{Suspense,lazy} from 'react'
const Carousel = lazy(() => import("./Carousal"));

import NatoursPromise from './NatoursPromise'
import MostPicked from './MostPicked'
import Footer from './Footer'


function Home() {
  return (
    <>
    <Suspense fallback={<div className="loader">Loading...</div>}>
       <Carousel/>
       <NatoursPromise/>
       <MostPicked/>
       <Footer/>
        </Suspense>
    </>
  )
}

export default Home
