import React from 'react'
import './Experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {BsFiletypeCss} from 'react-icons/bs'
import {SiJavascript} from 'react-icons/si'
import {TbBrandVue} from 'react-icons/tb'
import {RiReactjsFill} from 'react-icons/ri'


const Experience = () => {
  return (
    <section id='experience'>
   <h2>My Experience</h2>

<div className='container experience__container'>
<div className='experience_frontend'>

  <h3>Frontend Developemnt</h3>
  <div className='experience__content'>
    <article >
<AiFillHtml5 className='experience__details-icon'/>
<h4>HTML</h4>
    </article>

    <article >
<BsFiletypeCss className='experience__details-icon'/>
<h4>CSS</h4>
    </article>

    <article >
<SiJavascript className='experience__details-icon'/>
<h4>CSS</h4>
    </article>


    <article>
<TbBrandVue  className='experience__details-icon'/>
<h4>Vue.js</h4>
    </article>


    <article>
<RiReactjsFill  className='experience__details-icon'/>
<h4>React.js</h4>
    </article>
  </div>
</div>
</div>
    </section>
  )
}

export default Experience