import React from 'react'
import './Details.css'

const Details = ({brand, details}) => {
  return (
    <div className="quadloop__details">
      <p>{brand} </p>
      <p>{details}</p>
    </div>
  )
}

export default Details