import React from 'react'
import './portfolio.css'
import quiz from '../../assets/quiz-img.PNG'
import lebanon from '../../assets/lebanon-img.PNG'
import login from '../../assets/loginquizloons.PNG'
import chooseGame from '../../assets/choosegame.PNG'
import loonsoutside from '../../assets/loons-outside.PNG'
import loonsinside from '../../assets/loons-inside.PNG'


const data=[
  {
    id:1,
    image:quiz,
    title:"My Quiz App",
    github:"https://github.com/MarcOuba/quiz-app",
    live:"https://marcouba.github.io/quiz-app/"

  },
  {
    id:2,
    image:lebanon,
    title:"Lebanon Places Website",
    github:"https://github.com/MarcOuba/Beautiful-Lebanon",
    live:"https://marcouba.github.io/Beautiful-Lebanon/"

  },
  {
    id:3,
    image:login,
    title:"Quiz and loons game",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons"

  },
  {
    id:4,
    image:chooseGame,
    title:"Quiz and loons game",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons"

  },
  {
    id:5,
    image:loonsoutside,
    title:"Quiz and loons game",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons"

  },
  {
    id:6,
    image:loonsinside,
    title:"Quiz and loons game",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons"

  }

]

function portfolio() {
  
  

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
      data.map(({id,image,title,github,live}) =>{
    return(
    <article key={id} className="portfolio__item">
      <div className="portfolio__item-image">
    <img src={image} alt={title} />
      </div>
      <h3>
        {title}
      </h3>
      <div className="portfolio__item-cta">
      <a href={github} target="_blank" className='btn'>GitHub</a>
      <a href={live} target="_blank" className='btn btn-primary'>Live Website</a>
      </div>
    </article>
    )
      })
    }
      </div>
    </section>
  )
}

export default portfolio