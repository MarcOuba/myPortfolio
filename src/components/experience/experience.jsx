import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function experience() {
  return (
    <section id='experience'>
      <h5>The skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
<h3>Web Development</h3>
<div className="experience__content">
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>HTML</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>CSS</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon" />
    <div>
    <h4>JavaScript</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>TypeScript</h4>
    <small className='text-light'>Beginner</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>React</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>Redux</h4>
    <small className='text-light'>Beginner</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>Jquery</h4>
    <small className='text-light'>Beginner</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>Git</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>C#</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>mySql</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__details-icon"/>
    <div>
    <h4>PHP with AJAX</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>
</div>
        </div>
        
      </div>
    </section>
  )
}

export default experience