import React from 'react'
import {About, Challenges, Contact, Home, Impact, News, Partners, Solutions } from '../Containers';


const Landing = () => {
  return (
    <div>

<div className='quadloop__head'>

        <Home/>
      </div>

      <div className='quadloop__about_section'>
      <About/>
      </div>
      <div className='quadloop__challenges_section'>
        <Challenges />
      </div>
      <div className='quadloop__solutions_section'>
      <Solutions/>
      </div>
      <div className='quadloop__impact_section'>
      <Impact/>
      <News/>
      </div>
      <div className='quadloop__partners_section'>
      <Partners/>
      </div>
      <div className='quadloop__contact_section'>
      <Contact/>
      </div>


    </div>
  )
}

export default Landing