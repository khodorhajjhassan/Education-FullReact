import React from 'react'
import { coursesCard } from '../../dummydata'
import OnlineCourses from '../all courses/OnlineCourses'
import '../all courses/courses.css'

const HAbout = () => {
  return (
    <>
     <section className='course-card'>
          <div className="online-title">
                <h2>OUR COURSES</h2>
                <h3>EXPLORE OUR POPULAR ONLNE COURSES</h3>
            </div>
        <div className="container">
            <div className="course-items  ">
                {coursesCard.slice(0,3).map((val) => (
                    <div className="course-item ltr-effect">
                        <div className='items'>
                    <div className="left">
                        <img src={val.cover} alt="" />
                    </div>
                    <div className="course-Name">
                        <h2>{val.coursesName}</h2>
                    </div>
                    
                    </div>
                    <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <label htmlFor="/">(5.0)</label>
                    </div>
                        {val.courTeacher.map((detail)=>(

                            <div className="detail">
                                <div className="items">
                                <img src={detail.dcover} alt="" />
                                <p>{detail.name}</p>
                                </div>
                                <span>{detail.totalTime}</span>
                            </div>
                        ))}
                        <div className="price">
                            <p>{val.priceAll} / {val.pricePer}</p>
                        </div>
                        <button className='btn-buy'>ENROLL NOW !</button>
                    </div>
                ))}
                
            </div>
        </div>
        <OnlineCourses />
    </section>
    </>
  )
}

export default HAbout
