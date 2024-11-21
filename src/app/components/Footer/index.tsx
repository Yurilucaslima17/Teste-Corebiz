import React from "react";
import "./styles.scss";
// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="">
      <div className="footer__address-container">
        <address className="footer__address">
          <strong className="footer__address-location">Localização:</strong>
          <br />
          Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphaville, SP
          <br />
          <a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a>
          <br />
          <a href="tel:+551130901039">+55 11 3090 1039</a>
        </address>
      </div>
      <section className="footer__contact">
        <button className="footer__contact-button">
          <img src="/assets/icons/mail.svg" />
          ENTRE EM CONTATO
        </button>
        <button className="footer__contact-button">
          <img src="/assets/icons/headset.svg" />
          FALE COM O NOSSO CONSULTOR ONLINE
        </button>
      </section>
      <div className="copyright">
        <p className="copyright__text">
          Created by <img src="/assets/icons/logo-white.svg" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
