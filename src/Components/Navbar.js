import "./Styles/Navbar.css"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
function Navbar(){
  const [Nav,setNav] = useState(false)
  const params = useParams()
  console.log(params)
  
  
  return(
    <header>
      <div className="logo_btns">
        <p>JAKAREYA</p>
        <div onClick={()=>setNav(Nav ? false : true)} className={ `navBtn ${Nav ? "opendesain" : ""}` }>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      
      <nav className={Nav ? "nav_links_open" : "nav_links" }>
        <Link id="home-navlink" to="home"><span className="has">#</span>home</Link>
        <Link id="skills-navlink" to="skills"><span className="has">#</span>skills</Link>
        <Link id="projects-navlink" to="projects"><span className="has">#</span>projects</Link>
        <Link id="about-me-navlink" to="about-me"><span className="has">#</span>about_me</Link>
        <Link id="contact-me-navlink" to="contact-me"><span className="has">#</span>contact</Link>
        <Link className="hire_me" to="/">HIRE ME</Link>
      </nav>
    </header>
    )
}
export default Navbar