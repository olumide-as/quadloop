import React from 'react'
import "./Features.css"

const Features = ({imgUrl, feature}) => {
  return (
    <div className="quadloop__features">
      <img src={imgUrl} alt="feature"/>
      <p>{feature}</p>
    </div>
  )
}

export default Features