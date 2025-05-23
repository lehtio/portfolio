import projectImage from "../images/project-image.png"; // Import project image
import UIUXIMAGE from "../images/Portfolio_ui.png"; // Import UI/UX image
import Vakuutuskuva from "../images/paaikkuna.png"; // Import insurance image
import SaaApp from "../images/Weatherapp.png"
import TripAdvisor from "../images/TripAdvisor.png";
import BCookBook from "../images/BCookBook.png"; 
import Opintokorneri from "../images/Opintokorneri.png"; 
import Portfolio2 from "../images/Portfolio2.png"; // 


const projects = [
  
  { name: " UI/UX desing for this portfolio",
    image: UIUXIMAGE,
    description: "UI/UX design for this portfolio website that I created using Figma. The project was done because I wanted to learn how to use Figma and how to design a website properly. ",
    link: "https://www.figma.com/proto/DmCQZXpbDVjLFnsT1KXOm6/PORTFOLIO?node-id=12-39&t=1by9sHxNAGKQC6uM-1&starting-point-node-id=12%3A39",
    category:"UI/UX"
  },
  
  { name: "B's CookBook", 
    image: BCookBook,
    description: "Collection of recipies we did together with our flat during the exchange period. Link: https://lehtio.github.io/CookBook/ ",
    link: "https://github.com/lehtio/CookBook",
    category:"web"
  },
  { name: "Lähdeviitteiden muodon muokkaaja ", 
    image: projectImage,
    description: "The point of this project was learning how to handle project management  We used Scrum as our project management method.",
    link: "https://github.com/lehtio/miniproject?tab=readme-ov-file",
    category:"web"
  },
  { name: "Tämä portfolio gitissä", 
    image: Portfolio2,
    description: "This is a portfolio website that I created using React.",
    link: "https://github.com/lehtio/portfolio",
    category:"web"
  },
  { name: "Opintokorneri",
    image: Opintokorneri,
    description: "nettisivusto, jonne on koottu kanditutkintoon, tutkielmaan, vaihtoon ja opintojen suunnitteluun liittyviä vinkkejä, ",
    link: "https://github.com/lehtio/Opiskelukorneri",
    category:"web"
  },
  { name: "Pieni sääsovellus",
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

export default function Projects() {
  return (
    <div className="project-main-card">
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content">
              <div className="project-card-title">{project.name}</div>
              <div className="project-picture">
                <img src={project.image} alt={project.name} className="card-image" />
              </div>
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