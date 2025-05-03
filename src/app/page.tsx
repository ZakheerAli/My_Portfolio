import Navbar from "./component/navbar"
import HeroSection from "./component/hero"
import About from "./component/about"
import Skills from "./component/skill"
import ProjectSection from "./component/project"
import Contact from "./contact/page"
export default function home(){
  return(
    
    <div><Navbar/>
    <HeroSection/>
    <About/>
    <Skills/>
    <ProjectSection/>
    <Contact/>
       </div>
  )
}