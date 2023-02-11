import React from 'react'
import "./Solutions.css";
import { IdunnuLamp, IdunnuPro, PowerGenerator } from '../../Assets';

const Solutions = () => {
  return (
    <div className='content__padding quadloop__solutions' id='solutions'>
      <h2>Our Solutions</h2>

      <div className='quadloop__solutions_images'>
        <a href="#0" ><img src={IdunnuLamp} alt="Idunnu Solar Lamp" /></a>
        <a href="#0" ><img src={IdunnuPro} alt="Idunnu PRO" /></a>
        <a href="#0" ><img src={PowerGenerator} alt="Power Generator" /></a>


      </div>
    </div>
  )
}

export default Solutions