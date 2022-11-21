import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <Title  subtitle='WELCOME TO ACDAEMIA' title='BEST ONLINE EDUCATION' />
          <div className="row">
          <p className='hero-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error inventore laudantium ducimus illum itaque a sit consectetur laborum neque temporibus, reiciendis molestias aliquam odit repellendus sunt quis odio impedit quos?</p>
          <button className='btn btn-primary'>Get started now<i class="fa-solid fa-arrow-right"></i></button>
          <button className='btn btn-secondary'>VIEW COURSE<i class="fa-solid fa-arrow-right"></i></button>
        </div>
        </div>
      </section>
     
      <div className="margin"></div>
    </>
  )
}

export default Hero
