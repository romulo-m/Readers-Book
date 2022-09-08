import React from "react";
import S from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={S.containerPrincipal}>
      <div className={S.divs}>
        <h4>Follow</h4>
        <li>Instagram</li>
        <li>Facebook</li>
      </div>
      <div className={S.divs}>
        <h4>Contact</h4>
        <li>3233-2975</li>
        <li>hello@readersbook.com.br</li>
      </div>
      <div className={S.divs}>
        <h4>Office</h4>
        <li> Rua da Paçoca, n.7</li>
        <li> Rio de Janeiro/RJ</li>
      </div>
      <div className={S.divs}>
        <h4> Resilia Educação</h4>
        <li>Desenvolvido por Squad 1</li>
        <li>&copy;{new Date().getFullYear()}</li>
      </div>
    </footer>
  );
};

export default Footer;
