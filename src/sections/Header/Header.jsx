import './header.css'
import header from '../../assets/header.jpg'
import data from './data'

const Header = () => {
  return (
   <header id='header'>
    <div className='container header__container' >
    <div className='header__profile'>
<img src={header} alt='header portrait'/>
    </div>
   <h3>UGBAJE WILLIAM</h3>
   
   <p>you are a click away, from building your dream website and web app. send me the details of your project
    to get a mobile responsive, highly performant websites and applications today.
   </p>

   <div className='header__cta'>
   <a href='#Contacts' className='btn primary '>Let's Talk</a>
   <a href='#Portfolio' className='btn light'>My work</a>
   </div>

<div className='header__socials'>
  {
    data.map(item=> <a key={item.id} href={item.link} target={'_blank'} rel="noopener noreferrer">{item.icon}</a> )
  }
</div>
    </div>
   </header>
  )
}

export default Header