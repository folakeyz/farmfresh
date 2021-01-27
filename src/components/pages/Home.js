import React from 'react'
import Slider from '../Carousel/Carousel'
import Desc from '../Desc/Desc'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'
import WhatWeBelieve from '../WWB/WhatWeBelieve'


const  Home = () => {
    return (
      <>
      <Slider />
      <Products />
      <Desc />
      <WhatWeBelieve />
      <Footer />
      </>
    )
}
export default Home;