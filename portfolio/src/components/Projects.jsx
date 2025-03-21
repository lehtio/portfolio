import "../styles/Projects.css";
import projectImage from "../images/project-image.png"; // Import project image

const projects = [
  { name: "This portfolio website", 
    image: projectImage,
    description: "This is a portfolio website that I created using React. I used React Router to create the different pages of the website. I also used CSS to style the website. I created this website to showcase my projects and skills.",
    link: "https://github.com/lehtio/portfolio",
    category:"web"
  },
  { name: "bibtext converter", 
    image: projectImage,
    description: "small courseproject where we created a bibtext converter. The point of this project was learning how to handle project management and how to work in a team. We used Scrum as our project management method.",
    link: "https://github.com/lehtio/miniproject?tab=readme-ov-file",
    category:"web"
  },
  { name: "Web project",
    image: projectImage,
    description: "Tarkoituksena on rakentaa nettisivusto, jonne voi koota erilaisia opintoja helpottavia materiaaleja kuten lukusuunnitelmapohjat ja kootut linkit eri opintokokonaisuuksien Quizletteihin.",
    link: "https://github.com/lehtio/webproject",
    category:"web"
  },
  { name: "Small weather app",
    image: projectImage,
    description: "I created a small weather app using React. I used the OpenWeatherMap API to get the weather data. I created this app to practice using APIs in React.",
    link: "https://github.com/lehtio/projects",
    category:"web"
  },
  { name: "Ohjelmointi 2 kurssin vakuutustenhallinnan sovellus",
    image: projectImage,
    description: "Ohjelmointi 2 kurssin lopputyönä tehty vakuutustenhallinnan sovellus, jossa voi muokata, poistaa ja lisätä vakuutuksia käyttäjille.",
    link: "https://github.com/osterava/Sovellus-vakuutusten-hallintaan-ohj2",
    category: "desktop application"
  },
];

export default function Projects() {
  return (
    <div className="main-card">
      <h2 className="title">My Projects</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img src={project.image} alt={project.name} className="card-image" />
            <div className="card-content">
              <div className="card-title">{project.name}</div>
              <div className="card-description">{project.description}</div>
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
