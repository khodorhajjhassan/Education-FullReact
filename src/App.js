import React from 'react'
import './App.css'
import Header from "./components/common/heading/Header"
import Home from './components/home/hero/Home';
import About from './components/about/About';
import CoursesHome from './components/all courses/CoursesHome';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Team from './components/team/Team';
import Price from './components/price/Price';
import Blog from './components/common/blog/Blog';
import Contact from './components/contact/Contact';
import Fouter from './components/common/footer/Fouter';



const App = () => {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/courses' exact component={CoursesHome} />
            <Route path='/team' exact component={Team} />
            <Route path='/pricing' exact component={Price} />
            <Route path='/journal' exact component={Blog} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
          <Fouter />
      </Router>
    </>
  )
}

export default App
