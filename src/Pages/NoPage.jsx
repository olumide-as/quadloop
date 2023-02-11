import React from 'react'
import './NoPage.css'

const NoPage = () => {
  return (
    <div className='quadloop__NoPage'>

      <div className='quadloop__NoPage_content'>
      <h2>404</h2>
      <h3>There's nothing here</h3>
      <p>Maybe the page you're looking for is not found or never existed</p>
      <a href="/">Back to Home</a>
      </div>
      
    </div>
  )
}

export default NoPage