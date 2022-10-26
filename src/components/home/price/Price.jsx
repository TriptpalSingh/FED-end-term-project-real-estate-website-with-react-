import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Become a Member' subtitle='By becoming a member you unlock a host of new features like early listings for high demand properties, better sales and newsletter.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
