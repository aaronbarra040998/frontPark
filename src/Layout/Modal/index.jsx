import { useState } from "react";
import './styles.css';
import logo from "./logo.svg";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
    <section className="page modal-1-page">
      <div
        className={`modal-1-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleModal}
      >
        <div className="modal-1-modal">
          <header>
            <h2>Preinscription</h2>
            <h3>Solo ingrese su correo</h3>
          </header>
          <form onClick={(e) => e.stopPropagation()}>
            <div className="textbox">
              
                <input type="email" placeholder="Email" />
                
            </div>
            <div className="textbox">
              
                <input type="string" placeholder="Nombre Completo" />
                
            </div>
            <button
              className="signup-button"
              type="submit"
              onClick={toggleModal}
              style={{ backgroundColor: "#2cd6bb" }} // Cambio aquí
            >
              <p>ENVIAR</p>
            </button>

          </form>
          <p></p>
        </div>
      </div>
      <footer className="modal-1-footer">
  <div className="container">
    <article>
      <h2>Preregistrate de manera rapida y gratis.</h2>
      <button
        className="signup-button"
        type="button"
                onClick={toggleModal}
                style={{ backgroundColor: "#2cd6bb" }}
      >
        <p>Preregistro free</p>
      </button>
    </article>
    <section className="top">
              <ul>
                <img className="logotipo" src={logo} alt="Logo" />

              <li>
                <h3>Resources</h3>

                <a>Docs</a>

                </li>
                <li>
                <h3>Resources</h3>
                <a>Usage</a>


              </li>
              
            </ul>
          </section>
        </div>
      </footer>
      </section>
      </>
  );
};
export default Modal;