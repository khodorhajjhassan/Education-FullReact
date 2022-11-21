import React from 'react'
import { homeAbout } from '../../dummydata'
import Title from '../common/title/Title'
import './about.css'

const AboutCard = () => {
  return (
    <>
    <section className='aboutHome'>
        <div className="container flexSB">
           
            <div className="left row">
                <img src="./images/about.webp" alt="" />
            </div>
            <div className="right row">
                <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            
           
                {homeAbout.map((val)=> (
                    <div className='aboutHome-items'>
                        <div className='items-flex'>
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>

                        <div className="text">
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                        </div>
                    </div>
                ))}
            
            </div>
        </div>
        

    </section>
     
    </>
  )
}

export default AboutCard
