import React from 'react'
import CoursesCard from './CoursesCard'
import Back from '../back/Back'
import OnlineCourses from './OnlineCourses'

const CoursesHome = () => {
  return (
    <>
    <Back title='All Courses'/>
      <CoursesCard />
      <OnlineCourses />
      
    </>
  )
}

export default CoursesHome
