import "./Styles/Skills.css"
function Skills(){
  return(
    <section id="skills" className="skills_section aNavSec">
        <div className="section_title_box">
          <p className="title"><span className="has">#</span>skills</p>
          <div className="hr_line"></div>
        </div>
        <p>Expert in Full Stack Development, Software Development.</p>
        <div className="skills_icons_box">
          <div className="frontend_skills skill_icons">
            <img src="/icons/JavaScript.webp" alt="Javascript" title="#javascript"/>
            <img src="/icons/React.png" alt="React" title="#React"/>
            <img src="/icons/Nextjs.png" alt="Nextjs" title="#Nextjs"/>
            <img src="/icons/Bootstrap.png" alt="Bootstrap" title="#Bootstrap"/>
            <img src="/icons/Tailwind.png" alt="Tailwind" title="#Tailwind"/>
            <img src="/icons/Python.png" alt="Python" title="#Python"/>
            <img src="/icons/Typescript.png" alt="Typescript" title="#Typescript"/>
          </div>
          <div className="frontend_skills skill_icons">
            <img src="/icons/Nodejs.png" alt="Nodejs" title="#Nodejs"/>
            <img src="/icons/ExpressJs.png" alt="ExpressJs" title="#ExpressJs"/>
            <img src="/icons/MongoDB.png" alt="MongoDB" title="#MongoDB"/>
            <img src="/icons/MySQL.png" alt="MySQL" title="#MySQL"/>
            <img src="/icons/Java.png" alt="Java" title="#Java"/>
            <img src="/icons/Git.png" alt="Git" title="#Git" />
          </div>
        </div>
      </section>
    )
}
export default Skills