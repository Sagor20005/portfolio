import "./Styles/Home.css"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Fog from 'vanta/dist/vanta.fog.min'
import Skills from "./Skills.js"
import Projects from "./Projects.js"
import AboutMe from "./AboutMe.js"
import ContactMe from "./ContactMe.js"
import MyData from "./Data/Data.js"

function Home(){
  const { id } = useParams()
  const TypingEl = useRef(null)
  const HomeSection = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)
  
  
  
  const autoHilightLink = ()=>{
    const options = {threshold: 0.3}
    const callback = (entries,observer)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          hilightActiveLink(entry.target.id)
        }
      })
    }
    const observer = new IntersectionObserver(callback, options)
    const elements = document.querySelectorAll(".aNavSec")
    if(!elements) return false
    Array.from(elements).forEach((e)=>observer.observe(e))
  }
  autoHilightLink()
  
  
  const scrollToElement = (id="home") => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Optional: smooth scrolling
    }
  };
  
  const hilightActiveLink = (id="home")=>{
    const active = window.localStorage.getItem("JPAL")
    localStorage.setItem("JPAL",id)
    if(active){
      const element = document.querySelector("#"+active+"-navlink")
      if(element)element.style.color = null
    }
    const element = document.querySelector("#"+id+"-navlink")
    if(element)element.style.color = "white"
  }
  if(id){
    scrollToElement(id)
    hilightActiveLink(id)
  }
  
  useEffect(()=>{
    //Background effect code
    if (!vantaEffect) {
      setVantaEffect(Fog({
        el: HomeSection.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x4e4529,
        blurFactor: 0.48,
        midtoneColor: 0x927875,
        baseColor: 0xe1b1c,
        speed: 0.90
      }))
    }
    
    
    // Typing effect code
    const typed = new Typed(TypingEl.current, {
      strings: MyData.typingText || ["This is Empty"],
      startDelay: 50,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      // Distroy Background effect
      if (vantaEffect) vantaEffect.destroy()
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  },[])
  
  
  return(
    <section className="home_page">
      
      <section id="home" ref={HomeSection} className="home_section aNavSec">
        <div className="data">
          <p>Hello 👋 My Name is</p>
          <p>{MyData.fullname || "UNWANTED USER"}</p>
          <div className="typing_div">
            <span ref={TypingEl}></span>
          </div>
          <div className="home_links">
            <Link to="" >Resume<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
            <Link to="" >Github<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
          </div>
        </div>
      </section>
      
      
      <Skills />
      
      <Projects />
      
      <AboutMe />
      
      <ContactMe />
      
      
    </section>
    )
}
export default Home;