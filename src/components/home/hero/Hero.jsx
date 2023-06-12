import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="overlay"></div>
        <div className='hero_input_field'>
          <Heading title='Find Your Best Partner ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Looking For</span>
              <input type='text' placeholder='Men' />
            </div>
            <div className='box'>
              <span>Religion</span>
              <input type='text' placeholder='Religion' />
            </div>
            <div className='box'>
              <h4>Mother Tongue</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
