import { portfolioBoxes } from "./index.js";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest<span>&nbsp;Projects</span>
      </h2>
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {portfolioBoxes.map((info, key) => {
            return (
              <div className="portfolio-box" key={key}>
                <h4 className="portfolio-box_h4">{info.h4}</h4>
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
      <div></div>
    </section>
  );
};

export default Portfolio;
