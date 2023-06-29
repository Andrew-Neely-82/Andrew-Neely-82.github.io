import { React } from "../../assets/img/index";
import { info } from "./index";
import "./about.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <img src={React} alt="programming" className="img" />
      {info.map((info, key) => {
        return (
          <div className="about-content" key={key}>
            <h2 className="heading">
              {info.h2} <span>{info.h2Span}</span>
            </h2>
            <h3>{info.h3}</h3>
            <p>{info.p}</p>
          </div>
        );
      })}
    </section>
  );
};

export default About;
