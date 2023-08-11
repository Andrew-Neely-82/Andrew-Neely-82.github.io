import PortfolioContainer from "./portfolioContainer/PortfolioContainer.jsx";
import { SectionHeading } from "../../components/customHTML/export.js";
import { props } from "./index.js";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section {...props.section}>
      <div {...props.div}>
        <SectionHeading {...props.sectionHeading} />
        <div {...props.div2}>
          <PortfolioContainer />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
