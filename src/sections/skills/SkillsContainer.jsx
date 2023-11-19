import { skillsData } from ".";

const SkillsContainer = () => {
  return (
    <div className="skills-container-other">
      <div className="skills-container">
        {skillsData.map((skill, index) => {
          return (
            <div className="skills-box" key={index}>
              <div className="skills-box-header">
                <i className={skill.icon}></i>
                <h3>{skill.name}</h3>
              </div>
              <p className="skill-description">{skill.description}</p>
              {/* <div className="btn-container">
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

export default SkillsContainer;
