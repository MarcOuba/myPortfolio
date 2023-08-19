import React from 'react'
import './portfolio.css'
import quiz from '../../assets/quiz-img.PNG'
import lebanon from '../../assets/lebanon-img.PNG'
import loonsinside from '../../assets/loons-inside.PNG'
import chaletleb from "../../assets/chaletleb.jpg"
import dozaw from "../../assets/dozaw.jpg"
import utracfr from "../../assets/utracfr.jpg"
import utracad from "../../assets/utracad.jpg"
import webmark from "../../assets/webmark.jpg"
import findzone from "../../assets/senior.jpg"
import pharmacy from "../../assets/pharmacy.jpg"


const data=[
  {
    id:1,
    image:quiz,
    title:"My Quiz App",
    github:"https://github.com/MarcOuba/quiz-app",
    live:"https://marcouba.github.io/quiz-app/",
    locally:false,

  },
  {
    id:2,
    image:lebanon,
    title:"Lebanon Places Website",
    github:"https://github.com/MarcOuba/Beautiful-Lebanon",
    live:"https://marcouba.github.io/Beautiful-Lebanon/",
    locally:false,

  },
  {
    id:6,
    image:loonsinside,
    title:"Quiz and loons game",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons",
    locally:false,

  },
  {
    id:3,
    image:utracfr,
    title:"Utrac e-commerce store",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons",
    locally:true,

  },
  {
    id:4,
    image:utracad,
    title:"Utrac admin dashboard",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons",
    locally:true,

  },
  {
    id:5,
    image:dozaw,
    title:"Dozaw for selling goods",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons",
    locally:true,

  },
  
  {
    id:7,
    image:chaletleb,
    title:"Chalet lebanon renting website",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons",
    locally:true,

  },
  {
    id:8,
    image:webmark,
    title:"Webmark - web development agency website",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons",
    locally:true,

  },
  {
    id:9,
    image:findzone,
    title:"Findzone - my social media + selling website (senior project)",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons",
    locally:true,

  },
  {
    id:10,
    image:pharmacy,
    title:"Pharmacy managment system + user interface",
    github:"https://github.com/MarcOuba/quizloons",
    live:"https://marcouba.github.io/quizloons",
    locally:true,

  }

]

function portfolio() {
  
  

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
      data.map(({id,image,title,github,live,locally}) =>{
    return(
    <article key={id} className="portfolio__item">
      <div className="portfolio__item-image">
    <img src={image} alt={title} />
      </div>
      <h3>
        {title}
      </h3>
      <div className="portfolio__item-cta">
        {!locally ? 
        <>
          <a href={github} target="_blank" className='btn'>GitHub</a>
          <a href={live} target="_blank" className='btn btn-primary'>Live Website</a> 
          </>
          :
          <button style={{cursor:"not-allowed"}} className='btn btn-primary disabled'>Locally available</button>
      }
    
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