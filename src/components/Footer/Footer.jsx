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
        <h4>Contato</h4>
        <li>3233-2975</li>
        <li>hello@readersbook.com.br</li>
      </div>
      <div className={S.divs}>
        <h4>Escritório</h4>
        <li> Rua Amendoin, n.7</li>
        <li> Rio de Janeiro</li>
      </div>
      <div className={S.divs}>
      Desenvolvido por Squad 1
      </div>
    </footer>
  );
};

export default Footer;
