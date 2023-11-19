import { SectionHeading } from "../../components/customHTML/export";
import ContactForm from "./ContactForm";
import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        <SectionHeading text="Contact" span="Me!" />
        <h6 className="yellow-text">Send me a message!</h6>
        {/* <h6 className="yellow-text">Please use Linkedin button above in Home section</h6> */}
        <ContactForm />
        <div id="bottom"></div>
      </div>
    </section>
  );
};

export default Contact;
