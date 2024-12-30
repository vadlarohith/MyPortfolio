import React from "react";
import "./Home.css"; // CSS file for styling

const projects = [
  {
    id: 1,
    image: "https://github.com/vadlarohith/EduSmart-School-Management-System/blob/master/images/student_dashboard.PNG?raw=true",
    title: "EduSmart-The School Management System",
    description: "A Django website for the school management system.",
    githubLink: "https://github.com/vadlarohith/EduSmart-School-Management-System?tab=readme-ov-file",
  },
  {
    id: 2,
    image: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/storage/uploads/view/445a62c3be9785b1403eca3e0459776a.jpg",
    title: "MediConnect-Streamlining Healthcare Appointments",
    description: "The Static page that proffesional marriage invitation.",
    githubLink: "",
  },
  {
    id: 2,
    image: "https://i.ytimg.com/vi/5QECtDjr_f4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCdwojA24pF27PYlK7dSp_tiNYwbQ",
    title: "Driver Drowsiness Detection System",
    description: "A camera captures the driver continuously, if the driver closes their eyes it will give an alarm.",
    githubLink: "https://github.com/vadlarohith/Driver-Drowsiness-Detection-System-Using-Python",
  },
  {
    id: 3,
    image: "https://cache.careers360.mobi/media/article_images/2023/11/23/Application_form.jpg",
    title: "Common Application Form",
    description: "A Django website that takes the user entered data and stores in database and can view the data from the database.",
    githubLink: "https://github.com/vadlarohith/ApplicationForm",
  },
  {
    id: 4,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/6/425432911/OJ/LJ/SN/133975128/scan-code-cards.png",
    title: "Marriage Card",
    description: "The Static page that proffesional marriage invitation.",
    githubLink: "https://github.com/username/project3",
  },
  
  // Add more projects here if needed
];

const Projects = () => {
  return (
    <section className="projects-section" id="Projects">
      <h1 className="text-5xl lg:text-6xl font-bold text-center mb-12">
          Projects
        </h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.githubLink} className="github-button" target="_blank" rel="noopener noreferrer">
              Read More...
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
