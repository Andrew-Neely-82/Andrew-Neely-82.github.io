import { GradientText, Paragraph } from "../../components/customHTML/export";
import { React } from "../../assets/img/index";
import { info } from "./index";
import "./about.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-img">
          <img src={React} alt="programming" className="img" />
        </div>
        {info.map((info, key) => {
          return (
            <div className="about-details" key={key}>
              <h2 className="heading">
                {info.h2} <span>{info.h2Span}</span>
              </h2>
              <>{info.h3}</>
              <Paragraph text={info.p} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
