import React from 'react'
import './about.css'
import img from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


function about() {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
<div className="about__me-image">
  <img src={img} />
</div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
<h5>Experience</h5>
<small>No work experience but I have 3 years experience in coding.</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
<h5>Projects</h5>
<small>10+ Completed projects</small>
            </article>
          </div>
<p>Lorem ipsum dolor sit amet</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about