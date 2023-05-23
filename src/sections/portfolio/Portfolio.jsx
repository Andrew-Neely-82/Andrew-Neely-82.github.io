import { portfolioBoxes } from "./index.js";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <span
        style={{
          textAlign: "center",
          fontSize: "large",
          marginBottom: "1rem",
          color: "yellow",
        }}></span>
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {portfolioBoxes.map((info, key) => {
            return (
              <div className="portfolio-box" key={key}>
                <img src={info.img} alt={info.alt} />
                <div className="portfolio-layer">
                  <h4>{info.h4}</h4>
                  <p>
                    <br />
                    <span>{info.p1}</span>
                    <br />
                    <br />
                    <span>{info.p2}</span>
                    <br />
                    <br />
                    <span>{info.p3}</span>
                    <br />
                    <br />
                  </p>
                  <a href={info.a} target="_blank" rel="noreferrer">
                    <i className={info.i}></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
