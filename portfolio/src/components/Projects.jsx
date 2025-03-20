import "../styles/Projects.css";
import projectImage from "../images/project-image.png"; // Importoidaan kuva


const projects = [
  { name: "This portfolio website", 
    image: projectImage,
    description: "This is a portfolio website that I created using React. I used React Router to create the different pages of the website. I also used CSS to style the website. I created this website to showcase my projects and skills.",
    link: "https://github.com/lehtio/portfolio ",
    },

    { name: "bibtext converter", 
      image: projectImage,
      description: "We did small project in the course where we created a bibtext converter. The point of this project was learning how to handle project management and how to work in a team. We used Scrum as our project management method.",
      link: "https://github.com/lehtio/miniproject?tab=readme-ov-file"},

    { name: "Web project",
      image: projectImage,
      description: "Tässä omaa kivaa puuhaa. Tarkoituksena on rakentaa nettisivusto, jonne voi koota erilaisia opintoja helpottavia materiaaleja kuten lukusuunnitelmapohjat ja kootut linkit eri opintokokonaisuuksien Quizletteihin.",
      link: "https://github.com/lehtio/webproject"},
  
    { name: "Small weather app",
      image: projectImage,
      description: "I created a small weather app using React. I used the OpenWeatherMap API to get the weather data. I created this app to practice using APIs in React.",
      link: "https://github.com/lehtio/projects"},
  
    { name: "Ohjelmointi 2 kurssin vakuutustenhallinnan sovellus",
      image: projectImage,
      description: "Ohjelmointi 2 kurssin lopputyö. Tarkoituksena oli luoda vakuutustenhallintasovellus, jossa voi lisätä, poistaa ja muokata vakuutuksia. Sovellus on tehty Javalla parityönä.",
      link: "https://github.com/osterava/Sovellus-vakuutusten-hallintaan-ohj2"},
 
 
];

export default function Projects() {
  return (
    <div className="main-card">
      <h2 className="title">My Projects</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img src={project.image} alt={project.name} />
            <div className="card-title">{project.name}</div>
            <div className="card-description">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
