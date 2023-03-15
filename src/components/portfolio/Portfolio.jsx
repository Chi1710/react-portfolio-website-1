import React from 'react'
import "./portfolio.css"
import GIF1 from "../../assets/TipCalculatorWithReact.gif"
import GIF2 from "../../assets/MovieWatchlistApp.gif"

// import IMG1 from '../../assets/portfolio1.jpg';
// import IMG2 from '../../assets/portfolio2.jpg';
// import IMG3 from '../../assets/portfolio3.jpg';
// import IMG4 from '../../assets/portfolio4.jpg';
// import IMG5 from '../../assets/portfolio5.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={GIF1} alt="Tip Calculator With React Gif" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className='btn btn-primary'target='_blank' rel='noreferrer'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={GIF2} alt="Tip Calculator With React Gif" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className='btn btn-primary'target='_blank' rel='noreferrer'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={GIF1} alt="Tip Calculator With React Gif" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className='btn btn-primary'target='_blank' rel='noreferrer'>Live Demo</a>
        </article>



      </div>
    </section>
  )
}

export default Portfolio;