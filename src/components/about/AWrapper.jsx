import React from 'react'
import { awrapper } from '../../dummydata'
import './about.css'

const AWrapper = () => {
  return (
    <>
    <section className='awrapper'>
        <div className="wrapper-img">
            <div className="container">
                <div  className="items-2 grid">
                    {awrapper.map((val)=>(      
                        <div className='items-2'>
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h3>{val.data}</h3>
                            <h2>{val.title}</h2>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        </div>

    </section>
    </>
  )
}

export default AWrapper