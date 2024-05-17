 
import "./Footer.css";
export default function Footer() {
  return (
      <>
     <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Musuqtech. Todos los derechos reservados.</p>
        <nav>
          <ul>
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/privacy">Política de Privacidad</a></li>
          </ul>
        </nav>
      </div>
    </footer>
      </>
  );
}