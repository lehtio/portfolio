import { useState } from "react";

import "../styles/ExchangePage.css";

export default function Exchange() {
  const [openCourse, setOpenCourse] = useState(null);

  const toggleCourse = (course) => {
    setOpenCourse(openCourse === course ? null : course);
  };

  const courses = [
    { title: "Enable Innovation",
         description: "This course is a part of my innovation and industrial management studies. It is a combination of Harward case studies and theoretical parts of innovations, innovation management, innovation process, process thinking, prototyping ideas and modelling innovations within the company." ,
         credits: "4.5" },
    { title: "Strategic Management", 
        description: "Kurssikuvaus Strategic Management -kurssille...", 
        credits: "3" },
        
    { title: "Value Engineering", 
        description: "Kurssikuvaus Value Engineering -kurssille...",
        credits: "3" },
    { title: "Operational Risk Management", 
        description: "Kurssikuvaus Operational Risk Management -kurssille...",
        credits: "6" },
    { title: "Design to Value", 
        description: "Enable innovation kurssia muistuttava yhdistelmä teoriaa ja case studeja sekä pieni projekti", 
        credits: "4.5" },
    { title: "Diversity Management", 
        description: "Seminaarikurssi" ,
        credits: "3"},
    { title: "The History of Information and Communications Engineering", 
        description: "Kurssikuvaus The History of Information and Communications Engineering -kurssille...",
          credits: "2" },
    { title: "German Intensive Course",
        description: "Saksan kielen intensiivikurssi joka kesti 3 viikkoa. Kurssi sisälsi kieliopin ja sanaston lisäksi paljon puhumista ja kirjoittamista. Kurssin aikana tehtiin myös pieniä esitelmiä ja ryhmätöitä. Kurssilla oli suullinen ja kaksi kirjallista koetta.  A1.1",
        credits: "6", 
        grade: "2",
    }      
  ];

  return (
    <div className="exchange-container">

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

      <h2>Exchange courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <h2 onClick={() => toggleCourse(course.title)} className="course-title">
              {course.title}
            </h2>
            {openCourse === course.title && (
              <>
                <p className="course-description">{course.description}</p>
                <p className="course-credits">Credits: {course.credits}</p>
                <p className="course-grade">
                  Grade: {course.grade ? course.grade : "not graded yet"}
                </p>
              </>
            )}
          </div>
        ))}
       
      </div>
    </div>
  );
}