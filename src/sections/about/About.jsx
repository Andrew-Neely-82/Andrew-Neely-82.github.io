import Spline from "@splinetool/react-spline";
import { info } from "./index";
import "./about.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <Spline scene="https://prod.spline.design/LwqzmMfKq7HTx971/scene.splinecode" className="spline" />
      {info.map((info, key) => {
        return (
          <div className="about-content" key={key}>
            <h2 className="heading">
              {info.h2} <span>{info.h2Span}</span>
            </h2>
            <h3>{info.h3}</h3>
            <p>{info.p}</p>
            <div className="btn-container">
              <span>{info.span1}</span>
              <span>{info.span2}</span>
              <a href="#about" className="btn">
                {info.a}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default About;
