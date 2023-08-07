import { SectionHeading } from "../../components/customHTML/export";
import Modal from "./modal/Modal";
import "./style.scss";

const PersonalDevelopment = () => {
  return (
    <section className="Udemy_" id="personalDevelopment">
      <div className="wrapper">
        <SectionHeading text="Personal" span="Development" />
        <Modal />
      </div>
    </section>
  );
};

export default PersonalDevelopment;
