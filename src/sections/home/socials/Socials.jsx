import { Link } from "react-router-dom";
import { links } from "../links";
import "../home.scss";

const Socials = (key) => {
  return (
    <div key={key} className="social-media">
      {links.map((info, key) => {
        return (
          <span className="social-media_icon" key={key}>
            <Link to={info.href} target="_blank">
              <i className={info.class} title={info.title}></i>
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Socials;
