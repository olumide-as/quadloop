import React from 'react'
import "./Partners.css"
import { fate, weee, nci, allon, hinckley, ifair, Tech2impact, Lagos, Eic } from '../../Assets'

const Partners = () => {
  return (
    <div className='content__padding quadloop__partners' id='partners'>
      <h2> Our Partners</h2>
      <div className='quadloop__partners_images'>
        <a href="#0" ><img src={hinckley} alt="Hinckley Group" /></a>
        <a href="#0" ><img src={fate} alt="FATE Foundation" /></a>
        <a href="#0" ><img src={allon} alt="All on" /></a>
        <a href="#0" ><img src={weee} alt="Weee centre" /></a>
        <a href="#0" ><img src={Eic} alt="Eic" /></a>
        <a href="#0" ><img src={Lagos} alt="Lagos" /></a>
        <a href="#0" ><img src={nci} alt="Nigeria Climate Innovation Centre" /></a>
        <a href="#0" ><img src={ifair} alt="i-fair" /></a>
        <a href="#0" ><img src={Tech2impact} alt="Tech" /></a>


      </div>
    </div>
  )
}

export default Partners