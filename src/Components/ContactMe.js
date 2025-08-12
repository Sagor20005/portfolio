import "./Styles/ContactMe.css"
import { Link } from "react-router-dom"
import myData from "./Data/Data.js"

function ContactMe(){
  return(
    <section id="contact-me" className="contact-me_section aNavSec">
        <div className="section_title_box">
          <p className="title"><span className="has">#</span>contact-me</p>
          <div className="hr_line"></div>
        </div>
        <div className="contact">
          <p>I'm currently open to work and get involved in new projects, so get in touch if you'd like to Hire me or work together.</p>
          <p>Email me at <Link to="/">ms6392883@gmail.com</Link> and let's connect!</p>
          <div className="social_links">
            <Link to={myData?.socials?.github || ""}> <img src="/icons/github-dark.svg" alt="Github"/> </Link>
            <Link to={myData?.socials?.linkedin || ""}> <img src="/icons/linkedin-dark.svg" alt="Linkedin"/> </Link>
          </div>
        </div>
      </section>
    )
}
export default ContactMe