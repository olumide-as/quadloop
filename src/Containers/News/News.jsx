import React from 'react'
import './News.css'
import { IdunnuAd } from '../../Assets'


const News = () => {
  return (
    <div className='content__padding quadloop__news' id='news'>
      <h2> News and Events</h2>

      <div className='quadloop__news_content'>
        <div className='quadloop__news_content__text'>
          <p>Quadloop launches new idunnu solar lantern. Made from 70% recycled material, the idunnu lamp was made stylishly to fit any and every home...</p>
        </div>
        <div className='quadloop__news_content__post'>
          <img src={IdunnuAd} alt="News post" />

        </div>
      </div>

    </div>
  )
}

export default News