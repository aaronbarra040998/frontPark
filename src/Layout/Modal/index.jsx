import { useState } from "react";
import './styles.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <section className="page modal-1-page">
        <div className={`modal-1-overlay ${isOpen ? "open" : ""}`} onClick={toggleModal}>
          <div className="modal-1-modal">
            <header>
              <h2>descarga la aplicacion</h2>
              <h3>Solo seleccione:</h3>
            </header>
            <form onClick={(e) => e.stopPropagation()}>
              <div className="signup-button" style={{ backgroundColor: "#2cd6bb", margin: '10px' }}>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.parkingshub.parkingshubcl&pcampaignid=web_share" 
                  className="full-button"
                >
                  Parkings Hub
                </a>
              </div>
              <div className="signup-button" style={{ backgroundColor: "#2cd6bb", margin: '10px' }}>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.parkingshubpropietario.dev&pcampaignid=web_share" 
                  className="full-button"
                >
                  Parkings Hub Propietario
                </a>
              </div>
            </form>
            <p></p>
          </div>
        </div>
        <footer className="modal-1-footer">
          <div className="container">
            <article>
              <h2>Accede a la aplicacion de manera rapida y gratis.</h2>
              <button
                className="signup-button"
                type="button"
                onClick={toggleModal}
                style={{ backgroundColor: "#2cd6bb" }}
              >
                <p>Descarga</p>
              </button>
            </article>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Modal;
