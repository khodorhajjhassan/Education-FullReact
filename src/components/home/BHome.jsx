import React from 'react'
import PriceCard from '../price/PriceCard'
import '../common/blog/blog.css'
import { blog } from '../../dummydata'

const BHome = () => {
  return (
    <>
    <section className="blog">
        <div className='online-title'>
            <h2>Our Blog</h2>
            <h3>Recent From Blog</h3>
        </div>
        
        <div className="container">
            <div className="blog-content">
                {blog.slice(0,3).map((val)=>(
                    <div className="blog-items">
                        <img src={val.cover} alt="" />
                        <div className="blog-icon">
                            <span><i class="fa-solid fa-user"></i>{val.type}</span>
                            <span><i class="fa-regular fa-calendar-days"></i>{val.date}</span>
                            <span><i class="fa-solid fa-comments"></i>{val.com}</span>
                        </div>
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
        <PriceCard />
    </section>
      
    </>
  )
}

export default BHome
