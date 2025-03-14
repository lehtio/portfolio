import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen.jsx";

export default function Exchange() {
  const [openCourse, setOpenCourse] = useState(null);

  const toggleCourse = (course) => {
    setOpenCourse(openCourse === course ? null : course);
  };

  const courses = [
    { title: "Enable Innovation",
         description: "This course is a part of my innovation and industrial management studies. It is a combination of Harward case studies and theoretical parts of innovations, innovation management, innovation process, process thinking, prototyping ideas and modelling innovations within the company." },
    { title: "Strategic Management", 
        description: "Kurssikuvaus Strategic Management -kurssille..." },
    { title: "Value Engineering", 
        description: "Kurssikuvaus Value Engineering -kurssille..." },
    { title: "Operational Risk Management", 
        description: "Kurssikuvaus Operational Risk Management -kurssille..." },
    { title: "Design to Value", 
        description: "Kurssikuvaus Design to Value -kurssille..." },
    { title: "Diversity Management", 
        description: "Kurssikuvaus Diversity Management -kurssille..." },
    { title: "The History of Information and Communications Engineering", 
        description: "Kurssikuvaus The History of Information and Communications Engineering -kurssille..." }
  ];

  return (
    <div className="exchange-container">
      <LoadingScreen />
      <h1>Täällä tietoa vaihdosta ja vaihdon kursseista </h1>
      <p>Jorinaa kursseista ja mitä tuli opittua</p>
      
      <p>
        My plan for my exchange is to study my master's degree minor subject
        (industrial management), improve my language skills and analytical skills.
        In my case, this means that I will be studying case study courses, German language,
        and speak as much as possible in front of people presenting my ideas and thoughts.
        I will also be studying some courses in the field of industrial engineering and
        management to get a better understanding of the field and its different aspects.
      </p>

      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <h2 onClick={() => toggleCourse(course.title)} className="course-title">
              {course.title}
            </h2>
            {openCourse === course.title && (
              <p className="course-description">{course.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}