import React from "react";


const projects = [
  {
    title: "AjoSave Fintech App",
    description: "A group Saving App designed to make traditional Saving easier.",
  },
  {
    title: "Ajayi Crowther University Staff Portal",
    description: "A Full-Stack Web for Ajayi Crowther University Staff.",
  },
  {
    title: "Departmental Course Allocation",
    description: "A system for managing and allocating courses to faculty members in academic departments.",
  },
  {
    title: "Attendance Management System",
    description: "An automated solution for tracking and managing student or employee attendance.",
  },
  {
    title: "Clearance Management System",
    description: "An automated Clearance System that manages student records and review by Admin.",
  },
  {
    title: "HR Management System",
    description: "A system that manages staff, keeps records, and handles leave management.",
  },
  {
    title: "Design and Implementation of Online Library Management System",
    description: "An automated Library Management System that manages books for students and issues books.",
  },
  {
    title: "Development of Automated predictive System for Bipolar Disorder using LSTM",
    description: "This project was developed with Python; a training system for prediction based on dataset collected.",
  },
  {
    title: "Carbon footprint Awareness Website with resources",
    description: "A website that educates individuals about their environmental impact and helps reduce their carbon footprint.",
  },
  {
    title: "Development of Capsule Network base on Bone tumor Detection",
    description: "This project was developed with Python; a prediction system based on collected dataset.",
  },
  {
    title: "Performance Comparison of Mutual Information and Particle Swarm Optimization features selection Algorithm on the Random Forrest",
    description: "Implemented Mutual Information and Particle Swarm Optimization algorithms for feature selection on a heart disease dataset.",
  },
  {
    title: "My Portfolio",
    description: "This responsive portfolio website built with React, Vite, and  CSS.",
  },
];

function Project() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <span className="project-number">{index + 1}/12</span>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;