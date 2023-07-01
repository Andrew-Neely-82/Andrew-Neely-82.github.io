import PortfolioContainer from "./portfolioContainer/PortfolioContainer.jsx";
import { SectionHeading } from "../../components/customHTML/export.js";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section className="Portfolio__" id="portfolio">
      <SectionHeading text="Latest" span="Projects" />
      <div className="Portfolio__wrapper">
        <PortfolioContainer />
      </div>
    </section>
  );
};

export default Portfolio;
