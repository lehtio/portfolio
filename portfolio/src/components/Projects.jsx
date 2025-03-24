import projectImage from "../images/project-image.png"; // Import project image

const projects = [
  { name: "This portfolio website", 
    image: projectImage,
    description: "This is a portfolio website that I created using React.",
    link: "https://github.com/lehtio/portfolio",
    category:"web"
  },
  { name: "bibtext converter", 
    image: projectImage,
    description: "The point of this project was learning how to handle project management  We used Scrum as our project management method.",
    link: "https://github.com/lehtio/miniproject?tab=readme-ov-file",
    category:"web"
  },
  { name: "Web project",
    image: projectImage,
    description: "nettisivusto, jonne voi koota erilaisia opintoja helpottavia materiaaleja ystävilleni",
    link: "https://github.com/lehtio/webproject",
    category:"web"
  },
  { name: "Small weather app",
    image: projectImage,
    description: " Small weather app using React. I used the OpenWeatherMap API to get the weather data.",
    link: "https://github.com/lehtio/projects",
    category:"web"
  },
  { name: "vakuutustenhallinnan sovellus",
    image: projectImage,
    description: "vakuutustenhallinnan sovellus, jossa voi muokata, poistaa ja lisätä vakuutuksia käyttäjille.",
    link: "https://github.com/osterava/Sovellus-vakuutusten-hallintaan-ohj2",
    category: "desktop application"
  },
];

/*            <img src={project.image} alt={project.name} className="card-image" /> */
export default function Projects() {
  return (
    <div className="project-main-card">
      <h2 className="title">Featured Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content">
              <div className="project-card-title">{project.name}</div>
              <div className="project-card-description">{project.description}</div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}