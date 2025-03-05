import "../styles/Projects.css";
import projectImage from "../images/project-image.png"; // Importoidaan kuva


const projects = [
  { title: "Project 1", image: projectImage },
  { title: "Project 2", image: projectImage },
  { title: "Project 3", image: projectImage },
  { title: "Project 4", image: projectImage },
 
];

export default function Projects() {
  return (
    <div className="main-card">
      <span className="title">My Projects</span>
      <div className="cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <span className="card-title">{project.title}</span>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
