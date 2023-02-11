import React from 'react'
import "./Challenges.css"
import { SDGs, Scroll } from '../../Assets'

const Challenges = () => {
  return (
    <div className='content__padding quadloop__challenges '>
        
        <h2> The four global challenges <br/> we are tackling </h2>
        <div className='quadloop__challenges_image'>
            <img src={SDGs} alt=''/>
        </div>

        <div className='quadloop__challenges_04'>
      <a href='#solutions'> <img src={Scroll} alt="arrow down"/></a>
    </div>

        </div>
  )
}

export default Challenges