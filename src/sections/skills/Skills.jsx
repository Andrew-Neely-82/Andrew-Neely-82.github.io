import { SectionHeading } from "../../components/customHTML/export";
import SkillsContainer from "./SkillsContainer";
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="wrapper">
        <SectionHeading text="My" span="Skills" />
        <SkillsContainer />
      </div>
    </section>
  );
};

export default Skills;
