import { useState } from "react";
import { certs } from "./certs";
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
        Udemy &nbsp;<span>Certifications</span>
      </h2>
      {selectedImg && (
        <div className="modal">
          <span className="modal_close" onClick={closeModal}>
            x
          </span>
          <img src={selectedImg} alt="Modal" className="modal-image" />
          <h3>{certs.find((cert) => cert.img === selectedImg)?.alt} Certificate from Udemy</h3>
        </div>
      )}
      <div className="Udemy_certs-container">
        {certs.map((cert, key) => {
          return (
            <div key={key} className="Udemy_certs">
              <img key={cert.id} src={cert.img} alt={cert.alt} onClick={() => openModal(cert.img)} />
              <span>{cert.alt}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UdemyCerts;
