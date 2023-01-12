import About from "./sections/About/About"
// import Contacts from "./sections/Contacts/Contacts"
// import { FAQs } from "./sections/FAQs/FAQs"
// import Floatingnav from "./sections/Floatingnav/Floatingnav"
// import Footer from "./sections/Footer/Footer"
import Header from "./sections/Header/Header"
import Navbar from "./sections/Navbar/Navbar"
// import Portfolio from "./sections/Portfolio/Portfolio"
import Services from "./sections/Services/Services"
// import Testimonials from "./sections/Testimonials/Testimonials"


const App = () => {
  return (
  <main>
  <Navbar/>
  <Header/>
  <About/>
  <Services/>
  {/* <Portfolio/>
  <Testimonials/>
    <FAQs/>
   <Contacts/>
    <Footer/>
    <Floatingnav/>
    */}
    
    
   
   
  </main>
  )
}

export default App