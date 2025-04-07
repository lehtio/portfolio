import projectImage from "../images/project-image.png"; // Import project image
import UIUXIMAGE from "../images/Portfolio_ui.png"; // Import UI/UX image
import Vakuutuskuva from "../images/paaikkuna.png"; // Import insurance image
import SaaApp from "../images/Weatherapp.png"
import TripAdvisor from "../images/TripAdvisor.png"; // Import TripAdvisor image

const projects = [
  
  { name: " UI/UX desing for this portfolio",
    image: UIUXIMAGE,
    description: "UI/UX design for this portfolio website that I created using Figma.",
    link: "https://www.figma.com/proto/DmCQZXpbDVjLFnsT1KXOm6/PORTFOLIO?node-id=12-39&t=1by9sHxNAGKQC6uM-1&starting-point-node-id=12%3A39",
    category:"UI/UX"
  },
  { name: "Voice assistant for Trip advisor",
    image: TripAdvisor,
    description: "I created ui/ux design for a voice assistant for Trip advisor. The point  was to learn Figma",
    link:"https://www.figma.com/proto/dEZRWimp20Qh40bg88dSrw/TripAdvisor-Voice-assistant?node-id=1-2&starting-point-node-id=1%3A2&t=x08WayPGdttlBZDY-1",
    category:"UI/UX"
  },
  { name: "bibtext converter", 
    image: projectImage,
    description: "The point of this project was learning how to handle project management  We used Scrum as our project management method.",
    link: "https://github.com/lehtio/miniproject?tab=readme-ov-file",
    category:"web"
  },
  { name: "This portfolio website", 
    image: projectImage,
    description: "This is a portfolio website that I created using React.",
    link: "https://github.com/lehtio/portfolio",
    category:"web"
  },
  { name: "Web project",
    image: projectImage,
    description: "nettisivusto, jonne voi koota erilaisia opintoja helpottavia materiaaleja ystävilleni",
    link: "https://github.com/lehtio/webproject",
    category:"web"
  },
  { name: "Small weather app",
    image: SaaApp, 
    description: " Small weather app using React. I used the OpenWeatherMap API to get the weather data.",
    link: "https://github.com/lehtio/projects",
    category:"web"
  },
  { name: "Vakuutustenhallinnan sovellus",
    image: Vakuutuskuva,
    description: "Vakuutustenhallinnan sovellus, jossa voi muokata, poistaa ja lisätä vakuutuksia käyttäjille.",
    link: "https://github.com/osterava/Sovellus-vakuutusten-hallintaan-ohj2",
    category: "desktop application"
  },
];

/*            <img src={project.image} alt={project.name} className="card-image" /> */
export default function Projects() {
  return (
    <div className="project-main-card">
      <h2 className="title"> Tässä pari puuhaa by minä</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content">
              <div className="project-card-title">{project.name}</div>
              <div className="project-picture">
                <img src={project.image} alt={project.name} className="card-image" />
              </div>
              <div className="project-card-category">{project.category}</div>
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