import { useState } from "react";
import { certs } from "./img/certs";
import "./style.scss";

const UdemyCerts = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <section className="Udemy_" id="udemy">
      <h2 className="heading">
        Udemy <span>&nbsp;Udemy Certifications</span>
      </h2>
      {selectedImg && (
        <div className="modal">
          <span className="modal_close" onClick={closeModal}>
            x
          </span>
          <img src={selectedImg} alt="Modal" className="modal-image" />
          <h3>{certs.find((cert) => cert.img === selectedImg)?.alt}</h3>
        </div>
      )}
      <div className="Udemy_certs-container">
        {certs.map((cert) => (
          <img key={cert.id} src={cert.img} alt={cert.alt} onClick={() => openModal(cert.img)} />
        ))}
      </div>
    </section>
  );
};

export default UdemyCerts;
