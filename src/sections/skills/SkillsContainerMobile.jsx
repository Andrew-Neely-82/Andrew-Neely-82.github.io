import { useState } from "react";
import { skillsData } from ".";

const SkillsContainerMobile = () => {
  const [openSkillIndex, setOpenSkillIndex] = useState(-1);

  const toggleSkill = (index) => {
    if (openSkillIndex === index) {
      // If the clicked skill is already open, close it
      setOpenSkillIndex(-1);
    } else {
      // If a different skill is open, close it and open the clicked skill
      setOpenSkillIndex(index);
    }
  };

  return (
    <div className="skills-container-mobile">
      <div className="skills-container">
        {skillsData.map((skill, index) => {
          const isSkillOpen = openSkillIndex === index;
          const skillClassName = isSkillOpen ? "skills-box open" : "skills-box";

          return (
            <div className={skillClassName} key={index}>
              <div className="skills-box-header">
                <i className={skill.icon}></i>
                <h3>{skill.name}</h3>
                <button onClick={() => toggleSkill(index)} onTouchCancel={() => toggleSkill(index)}>
                  <i className={`bx ${isSkillOpen ? "bx-up-arrow-alt" : "bx-down-arrow-alt"}`}></i>
                </button>
              </div>
              <p className="skill-description" style={{ display: isSkillOpen ? "block" : "none" }}>
                {skill.description}
              </p>
              {/* <div className="btn-container" style={{ display: isSkillOpen ? "block" : "none" }}>
                <a href={skill.link} target="_blank" className="btn" rel="noreferrer">
                  Read More
                </a>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsContainerMobile;
