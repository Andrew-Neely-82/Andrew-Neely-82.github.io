import { useState } from "react";
import { certs } from "../certs";
import { Codeup } from "../img/export";
import "../style.scss";

const Modal = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <>
      {selectedImg && (
        <div className="modal">
          <span className="modal_close" onClick={closeModal}>
            x
          </span>
          <img src={selectedImg} alt="Modal" className="modal-image" />
          <h3>{certs.find((cert) => cert.img === selectedImg) ? `Certificate from Udemy` : `Codeup Graduation Certificate`}</h3>
        </div>
      )}
      <div className="Udemy_certs-container">
        <div className="Udemy_certs">
          <img src={Codeup} alt="Codeup Graduation Certificate" onClick={() => openModal(Codeup)} />
          <span>Codeup Graduation Certificate</span>
        </div>
        {certs.map((cert, key) => {
          return (
            <div key={key} className="Udemy_certs">
              <img key={cert.id} src={cert.img} alt={cert.alt} onClick={() => openModal(cert.img)} />
              <span>{cert.alt}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Modal;
