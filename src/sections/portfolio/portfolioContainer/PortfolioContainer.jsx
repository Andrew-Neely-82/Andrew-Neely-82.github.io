import { portfolioBoxes } from "../index";

const PortfolioContainer = () => {
  return (
    <>
      <div className="Portfolio__container">
        {portfolioBoxes.map((info, key) => {
          return (
            <div className="Portfolio__box" key={key}>
              <h4 className="Portfolio__box_h4">{info.h4}</h4>
              <img src={info.img} alt={info.alt} />
              <div className="Portfolio__layer">
                <p className="Portfolio__layer_p">
                  <span className="Portfolio__layer_p_span">{info.p1}</span>
                  <span className="Portfolio__layer_p_span">{info.p2}</span>
                  <span className="Portfolio__layer_p_span">{info.p3}</span>
                </p>
                <a href={info.a} target="_blank" rel="noreferrer">
                  <i className={info.i}></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default PortfolioContainer;
