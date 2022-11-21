import React from 'react'
import { testimonal } from '../../../dummydata'
import '../../all courses/courses.css'

const Testimonal = () => {
  return (
    <>
    <section className='testimonal'>
        <div className="online-title">
                <h2>TESTIMONAL</h2>
                <h3>Our Successful Students</h3>
            </div>
            <div className="container">
                <div className="testimonal-content">
                    {testimonal.map((val)=>(
                        <div className="test-items">
                            <div className="test-left">
                                <div className="test1">
                                <img src={val.cover} alt="" />
                                <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <div className="test2">
                                    <h2>{val.name}</h2>
                                    <h3>{val.post}</h3>
                                </div>

                            </div>
                            <p>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
    </section>
    </>
  )
}

export default Testimonal