import { SectionHeading } from "../../components/customHTML/export";
import Modal from "./modal/Modal";
import "./style.scss";

const PersonalDevelopment = () => {
  return (
    <section className="Udemy_" id="personalDevelopment">
      <SectionHeading text="Personal" span="Development" />
      <Modal />
    </section>
  );
};

export default PersonalDevelopment;
