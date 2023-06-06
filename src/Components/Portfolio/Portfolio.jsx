import React from 'react'
import "./Portfolio.css"
import calculator from "../../assets/calculator-demo.png"
import phonie from "../../assets/phonie.png"
import counter from "../../assets/counter.png"



const Portfolio = () => {
  return (
    <section id='portfolio'>
   <h5>My Recent Work</h5>
   <h2>portfolio</h2>


<div className='container portfolio__container'>
<article className='portfolio__item'>
<div className='portfolio__item-image'>
<img src={calculator} alt=''/>
</div>
<h3>Calculator web app, created with React.js</h3>
<div className='portfolio__item-cta'>
<a href='https://github.com/Ugbajewilliam/calculator-assignment' className='btn' target='blank'>Github</a>
<a href='https://op0612-3000.csb.app/' className='btn btn-primary'>Live Demo</a>
</div>

</article>

<article className='portfolio__item'>
<div className='portfolio__item-image'>
<img src={phonie} alt=''/>
</div>
<h3>Know your mobile subscriber, <i>input your mobile number, and it will display which network it belongs to.</i> created with html, css and javascript.</h3>
<div className='portfolio__item-cta'>
<a href='https://github.com/Ugbajewilliam/mobile-subscribers' className='btn' target='blank'>Github</a>
<a href='https://bucolic-sawine-2840c8.netlify.app/' className='btn btn-primary'>Live Demo</a>
</div>

</article>

<article className='portfolio__item'>
<div className='portfolio__item-image'>
<img src={counter} alt=''/>
</div>
<h3>Counter application, Created with Vue.js</h3>
<div className='portfolio__item-cta'>
<a href='https://github.com/Ugbajewilliam/Third-semester-exam' className='btn' target='blank'>Github</a>
<a href='https://cosmic-beignet-2528d9.netlify.app/' className='btn btn-primary'>Live Demo</a>
</div>

</article>

</div>
    </section>
  )
}

export default Portfolio