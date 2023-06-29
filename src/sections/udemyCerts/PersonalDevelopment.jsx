import { Codeup } from "./img/export";
import { useState } from "react";
import { certs } from "./certs";
import "./style.scss";
import Modal from "./modal/Modal";

const PersonalDevelopment = () => {
  return (
    <section className="Udemy_" id="personalDevelopment">
      <h2 className="heading">
        Personal&nbsp;<span>Development</span>
      </h2>
      <Modal />
    </section>
  );
};

export default PersonalDevelopment;
