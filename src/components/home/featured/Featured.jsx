import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='100% Manual Screening of Profiles' subtitle='– Trusted since 2005' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
