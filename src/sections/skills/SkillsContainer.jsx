import React, { useEffect, useState } from "react";
import { dimensions, skillsData } from ".";

const SkillsContainer = () => {
  const [openSkillIndex, setOpenSkillIndex] = useState(-1);
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 770;

  const updateDimensions = dimensions(setWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  const toggleSkill = (index) => {
    if (isMobile) {
      setOpenSkillIndex(openSkillIndex === index ? -1 : index);
    }
  };

  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => {
        const displayValue = isMobile ? (openSkillIndex === index ? "flex" : "none") : "flex";

        return (
          <div className="skills-box" key={index}>
            <div className="skills-box-header">
              <i className={skill.icon}></i>
              <h3>{skill.name}</h3>
              <i className={`bx ${openSkillIndex === index ? "bx-up-arrow-alt" : "bx-down-arrow-alt"}`} style={{ display: isMobile ? "flex" : "none" }} onClick={() => toggleSkill(index)} onTouchStart={() => toggleSkill(index)}></i>
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
  );
};

export default SkillsContainer;
