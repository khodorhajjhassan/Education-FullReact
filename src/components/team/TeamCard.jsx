import React from 'react'
import { team } from '../../dummydata'
import './team.css'

const TeamCard = () => {
  return (
    <>
   <section className='team'>
    <div className="container">
        <div className="team-content">
            {team.map((val)=>(
                <div className="items">
                    <div className="items-img">
                        <img src={val.cover} alt="" />
                          <div className="team-social">
                             <i class="fa-brands fa-facebook-f "><a href="#"></a></i>
                              <i class="fa-brands fa-instagram "><a href="#"></a></i>
                               <i class="fa-brands fa-twitter "><a href="#"></a></i>
                                <i class="fa-brands fa-youtube "><a href="#"></a></i>
                              </div>
                              </div>
                              <h2>{val.name}</h2>
                              <p>{val.work}</p>

                   
                </div>
            ))}
        </div>
    </div>
   </section>
    </>
  )
}

export default TeamCard