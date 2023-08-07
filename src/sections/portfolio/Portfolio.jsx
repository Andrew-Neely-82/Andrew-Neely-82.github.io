import PortfolioContainer from "./portfolioContainer/PortfolioContainer.jsx";
import { SectionHeading } from "../../components/customHTML/export.js";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section className="Portfolio__" id="portfolio">
      <div className="wrapper">
        <SectionHeading text="Latest" span="Projects" />
        <div className="Portfolio__wrapper">
          <PortfolioContainer />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
