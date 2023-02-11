import React from 'react'
import './About.css'
import { About1, About2, About3, About4, About5, About7, Carbon, EnergyCost, Reuse} from '../../Assets'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturesNumber from '../../Components/FeaturesNumber/FeaturesNumber';




const About = () => {


  return (
    <div className='content__padding quadloop__about' id='about' >
      <h2>About Us</h2>

      <div className='quadloop__about_01'>
        <div className='quadloop__about_01__text'>
          <p>Quadloop is a social enterprise company that aims to develop affordable solar lanterns and home systems produced with a lower environmental impact. We are determined to be at the forefront of the technological renovation that will lead to a responsible, carbon – neutral product era. </p>
          <p> We relieve the environmental pressures of exploitation of natural resources for both battery production and the entire product design and development by applying a 0 – mining policy by sourcing 70% of our materials entirely from Electronic waste. </p>
          <p>Our entire operation is based around principles of circular economy which close the loop on battery production. We commit on employing all of our technical capabilities to innovate on production methods that reduce waste production and properly dispose of all materials employed.</p>
        </div>

        <div className='quadloop__about_01__image'>
          <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} showStatus={false} showThumbs={false} width={350}>
          <img src={About1} alt="About Us 1" />
          <img src={About2} alt="About Us 2" />
          <img src={About3} alt="About Us 3" />
          <img src={About4} alt="About Us 4" />
          <img src={About5} alt="About Us 5" />
          <img src={About7} alt="About Us 7" />

          </Carousel>
        </div>

      </div>

      <div className='quadloop__about_02'>
        <h3>Our Vision</h3>

        <div className='quadloop__about_02__content'> 

        <div className='quadloop__about_02__text'>
          <p>Contributing to fight climate change while improving energy access across the continent, we are a passionate mission – driven organization eagerly looking for innovative ways to Reduce Recycle and Reuse E-waste generated in Africa.</p>
        </div>

        <div className='quadloop__about_02__image'>
          
        <a href="#0" className='image1'><FeaturesNumber imgUrl={Reuse} feature="Reuse rate of batteries" number={100} ending={'%'} point={0}/></a>
        <a href="#0" className='image2'><FeaturesNumber imgUrl={EnergyCost} feature="Cost of Energy" number={50} ending={'%'} point={0}/></a>
        <a href="#0" className='image3'><FeaturesNumber imgUrl={Carbon} feature="Carbon Neutral Energy Storage" number={0} ending={'% CO'} point={0}/></a>

        </div>

        </div>

      </div>


    </div>
  )
}

export default About