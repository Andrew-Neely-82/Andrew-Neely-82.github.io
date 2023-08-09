import PortfolioContainer from "./portfolioContainer/PortfolioContainer.jsx";
import { SectionHeading } from "../../components/customHTML/export.js";
import "./portfolio.scss";

const Portfolio = () => {
  const props = {
    section: {
      className: "Portfolio__",
      id: "portfolio",
    },
    div: {
      className: "wrapper",
    },
    sectionHeading: {
      text: "Latest",
      span: "Projects",
    },
    div2: {
      className: "Portfolio__wrapper",
    },
  };
  
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
