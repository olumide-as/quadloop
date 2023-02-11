import React from 'react'
import "./FeaturesNumber.css"
import CountUp from 'react-countup';

const FeaturesNumber = ({imgUrl, feature, number, ending, point}) => {
  return (
    <div className="quadloop__FeaturesNumber">
      <img src={imgUrl} alt="feature"/>
      <h4><CountUp end={number} duration={10} suffix={ending} enableScrollSpy={true} decimals={point}/></h4>
      <p>{feature}</p>
    </div>
  )
}

export default FeaturesNumber