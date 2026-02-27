import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="tabs">
        <button
          className={activeTab === "mission" ? "active" : ""}
          onClick={() => setActiveTab("mission")}
        >
          Mission
        </button>

        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Educational Background
        </button>

        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "mission" && (
          <div>
            <h3>Mission</h3>
            <p>
              As a computer scientist, I utilize advanced techniques and
              technology to solve complex problems and drive progress.
              With expertise in algorithms and a passion for learning,
              I deliver robust solutions.
            </p>
          </div>
        )}

        {activeTab === "education" && (
          <div>
            <h3>Educational Background</h3>
            <p>
              B.Sc. in Computer Science – Nigeria.
              Focused on software engineering and web development that enhance efficiency across various domains..
            </p>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <h3>Skills</h3>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
