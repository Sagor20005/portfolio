import "./Styles/Projects.css"
import MyData from "./Data/Data.js"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Projects() {
  const total = MyData.projects.length
  const start = 0;
  const [end,setEnd] = useState(2)
  const left = total-end >= 2 ? 2 : total-end < 1 ? 0 : total-end
  
  let projectDiv = null
  
  function GenareteHtml(projects,start,end){
    const data = projects.slice(start,end)
    projectDiv = data.map((project)=>{
      return(
        <div className="project left">
              <img src={project.image} alt="project" />
            <div className="data">
              <p className="p_name">{project.name}</p>
              <p className="p_title">{project.title}</p>
              <ul className="p_uses">
                {project?.uses?.map((use)=> <li>#{use}</li>)}
              </ul>
              <p className="p_description">{project.description}</p>
              {project?.urls?.github && <Link to={project?.urls?.github}>Github<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link> }
              {project?.urls?.live && <Link to={project?.urls?.live}>Live<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link> }
            </div>
          </div>
        )
    })
  }
  
  GenareteHtml(MyData.projects,start,end)
  
  return(
    <section id="projects" className="projects_section aNavSec">
      <div className="section_title_box">
        <p className="title"><span className="has">#</span>projects</p>
        <div className="hr_line"></div>
      </div>
      <p>View my latest projects</p>
      <div className="projects">

        {projectDiv}

    </div>
    <div className="projects_actions">
      <button onClick={()=> !(end >= total) && setEnd(end+2)  }>Load More({left})</button>
      <button onClick={()=> setEnd(total)  } >View All</button>
    </div>
  </section>
)
}
export default Projects