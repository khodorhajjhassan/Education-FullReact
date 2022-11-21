import React, { useState } from 'react'
import { faq } from '../../dummydata'
import './price.css'

const Question = () => {
const [click,setClick]=useState(false)
const toggle =(index)=>{
    if (click===index){
    return setClick(null)
}
    setClick(index)
}


  return (
    <>
    <section className='question'>
        <div className="t-s">
        <h2>FAQS</h2>
        <h3>frequesntly ask question</h3>
        </div>
        <div className="container">
            <div className="question-content">
              {faq.map((val,index)=>(
                <div className="box">
                <button className='btn-hide' onClick={()=>toggle(index)} key={index}>
                    <p>{val.title}</p>
                    <span>{click===index?<i className='fa fa-chevron-down'></i>:<i className='fa fa-chevron-up'></i>}</span>
                </button>
                {click===index?(
                <div className='desc'>
                    <p>{val.desc}</p>
                </div>
              ):null}
              </div>
              ))}
            
               
            </div>
        </div>
    </section>
    </>
  
  )
                }

export default Question
