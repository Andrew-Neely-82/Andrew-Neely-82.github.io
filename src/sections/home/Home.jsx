import { Link } from "react-router-dom";
import { info } from "./info.js";
import { links } from "./links";
import "./home.scss";

const Home = () => {
  //
  const Socials = () => {
    return (
      <div className="social-media">
        {links.map((info) => {
          return (
            <>
              <Link to={info.href} target="_blank">
                <i className={info.class} title={info.title}></i>
              </Link>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        {info.map((info) => {
          return (
            <>
              <h3>{info.h3_1}</h3>
              <h1>{info.h1}</h1>
              <h3>
                {info.h3_2}
                <span>{info.span}</span>
              </h3>
              <p>{info.p}</p>
            </>
          );
        })}
        <Socials />
      </div>
      <div className="home-img">
        <img src="https://avatars.githubusercontent.com/u/114946953?v=4" alt="me" title="Me!" />
      </div>
    </section>
  );
};

export default Home;
