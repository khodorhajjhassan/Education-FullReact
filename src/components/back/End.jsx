import React from 'react'
import { useLocation } from 'react-router-dom'

const End = ({title}) => {
    const location =useLocation()
  return (
    <>
    <section className='end'>
        <h2><i class="fa fa-house"></i>    / {location.pathname.split('/')[1]}</h2>
        <h1>{title}</h1>
    </section>
    <div className="margin"></div>
      
    </>
  )
}

export default End