import React from 'react'
import "./experience.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>JavaScrpit</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>BootStrap</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Angular</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
        {/*************end OF frontend *******************/}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Node JS</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Java</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Hibernate</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Spring Boot</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience;