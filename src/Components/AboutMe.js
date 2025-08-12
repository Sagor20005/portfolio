import "./Styles/AboutMe.css"
import MyData from "./Data/Data.js"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function AboutMe(){
  return(
    <section id="about-me" className="about-me_section aNavSec">
        <div className="section_title_box">
          <p className="title"><span className="has">#</span>about-me</p>
          <div className="hr_line"></div>
        </div>
        <div className="about">
          <img src={MyData?.image} alt="Jakareya" />
          <div className="about_data">
            <p><span>Hello!</span>I’m Jakareya, a budding full-stack web developer based in Khulna, Bangladesh. Since my first coding adventure in 9th grade, I’ve been hooked on technology.</p>
            
            <div style={{border:"none",padding:"0"}} className="about-skills_journey">
              <div className="about_skills">
              <h3>#skills</h3>
              <ul className="a_skills">
                {MyData?.typingText?.map((t)=> <li>{t}</li> )}
              </ul>
            </div>
            <div className="journey">
              <h3>#journey</h3>
              <p>H.S.C graduate. Now exploring technology and learning new things.</p>
            </div>
            </div>
            
            <div className="passion">
              <h3>#passion</h3>
              <p>In recent years, I’ve dived into coding, building robust front-end stacks and tackling real-world challenges. I’m passionate about making a difference through technology.</p>
            </div>
            <div className="about_footer">
              <p>Explore my portfolio and let’s connect for collaborations!</p>
              <button><Link to="/contact-me"><FontAwesomeIcon icon={faArrowDown} /></Link></button>
            </div>
          </div>
        </div>
      </section>
    )
}
export default AboutMe