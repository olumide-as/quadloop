import React from 'react'
import "./Impact.css"
import { Co2, Cost, Homes } from '../../Assets'
import FeaturesNumber from '../../Components/FeaturesNumber/FeaturesNumber';


const Impact = () => {
  return (
    <div className='quadloop__impact content__padding' id='impacts'>
      
      <h2>Our Impact</h2>
      <div className='quadloop__impact_content'>
          <div className='quadloop__impact_content__text'>
            <p> For every Quadloop lantern produced, 2.5kg of e-waste is prevented from going into the landfill other metrics can be for any lantern used 0.5kg of CO is prevented from the use of kerosene lanterns and other dirty sources of light. </p>
          </div>
          <div className='quadloop__impact_content__metrics'>
            <h3> Key Metrics </h3>

            <div className='quadloop__impact_content__metrics_images'>
              <a href="#0" className='image1'><FeaturesNumber imgUrl={Co2} feature="Trapped" number={0.678} point={1} ending={'kg'}/></a>
              <a href="#0" className='image2'><FeaturesNumber imgUrl={Cost} feature="Utilized E-waste" number={362.5} point={1} ending={'kg'}/></a>
              <a href="#0" className='image3'><FeaturesNumber imgUrl={Homes} feature="Homes with power" number={100} point={0} ending={'+'}/></a>
            </div>


          </div>

      </div>


    </div>
  )
}

export default Impact