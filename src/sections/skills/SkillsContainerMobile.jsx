import React, { useState } from "react";
import { skillsData } from ".";

const SkillsContainerMobile = () => {
  const [openSkillIndex, setOpenSkillIndex] = useState(-1);

  const toggleSkill = (index) => {
    setOpenSkillIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="skills-container-mobile">
      <div className="skills-container">
        {skillsData.map((skill, index) => {
          const isSkillOpen = openSkillIndex === index;
          const displayValue = isSkillOpen ? "block" : "none";

          return (
            <div className="skills-box" key={index}>
              <div className="skills-box-header">
                <i className={skill.icon}></i>
                <h3>{skill.name}</h3>
                <button onClick={() => toggleSkill(index)}>
                  <i className={`bx ${isSkillOpen ? "bx-up-arrow-alt" : "bx-down-arrow-alt"}`}></i>
                </button>
              </div>
              <p className="skill-description" style={{ display: displayValue }}>
                {skill.description}
              </p>
              <div className="btn-container" style={{ display: displayValue }}>
                <a href={skill.link} target="_blank" className="btn" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsContainerMobile;
