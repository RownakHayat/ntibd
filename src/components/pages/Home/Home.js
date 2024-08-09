import React from 'react'
import CarouselHome from '../../common/Carousel/CarouselHome'
import Products from './Products/Products'
const Home = () => {

  return (
    <>
      <div className=' bg-gradient-to-r from-[#DBEDE1] from-10% via-[#F7FCF8] via-10% to-[#DBEDE1] to-90% ... '>
        <CarouselHome />
      </div>
      <div className="mb-0 mt-[14rem] px-28">
      <Products />
      </div>
    </>
  )
}



export default Home