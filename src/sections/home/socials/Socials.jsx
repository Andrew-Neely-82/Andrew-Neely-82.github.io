import { links } from "../links";
import "../home.scss";

const Socials = (key) => {
  return (
    <div key={key} className="social-media">
      {links.map((info, key) => {
        return (
          <span className="social-media_icon" key={key}>
            <a href={info.href} target="_blank" rel="noreferrer">
              <i className={info.class} title={info.title}></i>
            </a>
          </span>
        );
      })}
    </div>
  );
};

export default Socials;
