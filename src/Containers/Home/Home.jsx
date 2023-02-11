import React from 'react'
import "./Home.css"
import { LampSolar, Coins, Recycling, Solar, Scroll} from '../../Assets'
import {Features} from '../../Components'

const Home = () => {
  return (
    <div className='content__padding'>


    <div className='quadloop__home_01'>  
      <div className='quadloop__home_01__text slide-in-blurred-left'>
        <h1>Pioneering <span>innovative</span> ways to utilize Africa&apos;s ever-growing <span>Electronic waste</span> stream.</h1>
      </div>

      <div className='quadloop__home_01__image slide-in-right'>
        <img src={LampSolar} alt="Lamp and Solar" />
        <a href='/preorder'><button>PreOrder Now</button></a>
      </div>
    </div>

    <div className='quadloop__home_02'>
      <h3>
      Unlocking true socio economic environmental potential of e-waste and second life battery technology.
      </h3>
    </div>

    <div className='quadloop__home_03'>
      <Features imgUrl={Coins} feature="Affordable" />
      <Features imgUrl={Recycling} feature="Sustainable" />
      <Features imgUrl={Solar} feature="Clean Energy" />
    </div>

    <div className='quadloop__home_arrow'>
      <a href='#about'> <img src={Scroll} alt="arrow down"/></a>
    </div>

  
      </div>
  )
}

export default Home