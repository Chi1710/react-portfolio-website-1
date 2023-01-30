import React from 'react'
import "./about.css";
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {TbMessageCode} from 'react-icons/tb'
import {GiDiamondHard} from 'react-icons/gi'


const About = () => {
  return (
    <section id ='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
            <img src={ME} alt="about section headshot" />
          </div>
          </div>

          <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 10+ years of Craft Experience</small>
            </article>
            <article className='about__card'>
              <TbMessageCode className='about__icon'/>
              <h5>Languages</h5>
              <small>Java, JavaScript, HTML/CSS</small>
            </article>
            <article className='about__card'>
              <GiDiamondHard className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ and growing</small>
            </article>
            </div>
            <p>
            A self-motivated software developer with entry-level experience, 
            interested in building alongside collaborative and like-minded colleagues 
            and companies who share the same drive for exceptional craft and human-centric products.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About;