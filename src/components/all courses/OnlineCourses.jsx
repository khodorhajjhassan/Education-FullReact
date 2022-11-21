import React from 'react'
import { online } from '../../dummydata'
import './courses.css'

const OnlineCourses = () => {
  return (
    <>
    <section  className='online-courses'>
            <div className="online-title">
                <h2>COURSES</h2>
                <h3>Browse Our Online Courses</h3>
            </div>
        <div className="container">
            <div className="online-items">
                {online.map((val)=>(
                    <div className="content">
                        <div className="online-img">
                            <img className='img1' src={val.cover} alt="" />
                            <img className='img2' src={val.hoverCover} alt="" />
                        </div>
                        <h3>{val.courseName}</h3>
                        <span>{val.course}</span>
                        
                    </div>
                ))}
            </div>
        </div>
    </section>
      
    </>
  )
}

export default OnlineCourses
