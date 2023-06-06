import './About.css'
import AboutImage from '../../assets/AboutImage.jpg'
import {BsDownload } from 'react-icons/bs';
import CV from '../../assets/CV.pdf'
import data from './data'
import Card from '../../components/Card'

const About = () => {
  return (
 <section id='about'> 
  <div className='container about__container'>
<div className='about__left'>
<div className='about__portrait'>
  <img src={AboutImage} alt="Aboutimage"/>
</div>

</div>
<div className='about__right'>
<h2>About Me</h2>
<div className='about__cards'>
  {
  data.map(item=> (
    <Card key={item.id} className='about__card'>
<span className='about__card-icon'>{item.icon}</span>
<h5>{item.title}</h5>
<p>{item.desc}</p>

    </Card>
  ))
  }
</div>
<p>
Hello, my name is <strong>UGBAJE WILLIAM,</strong>  And am a passionate frontend engineer and a current student at <strong>AltSchool Africa. </strong> 
I have a strong interest in building visually appealing and user-friendly websites and applications. 
I am constantly seeking new opportunities to learn and improve my skills, and have built several projects to prepare myself for the competitive job market. 
I am excited to continue growing as a developer and make a meaningful impact in the tech industry. check out my resume below
</p>
 <a href={CV} download className='btn primary'>Download CV <BsDownload/></a>
</div>
</div>

  </section>
  )
}

export default About