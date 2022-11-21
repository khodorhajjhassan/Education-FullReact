import React from 'react'
import { price } from '../../dummydata'
import './price.css'

const PriceCard = () => {
  return (
    <>
   <section className="Pricee">
        <div className='online-title'>
            <h2>OUR PRICING</h2>
            <h3>PRICING & PACKAGES</h3>
        </div>
    <div className="container">
        <div className="price-content">
            {price.map((val)=>(
                <div className="price-items">
                    <h2>{val.name}</h2>
                    <div className="left">
                        <span>$</span>
                        <h3>{val.price}</h3>
                    </div>
                    <p>{val.desc}</p>
                    <button className='btn-buy'>GET STARTED</button>
                </div>
            ))}
        </div>
    </div>
   </section>
      
    </>
  )
}

export default PriceCard
