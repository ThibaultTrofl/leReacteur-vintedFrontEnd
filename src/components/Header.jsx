import { Icon } from "@iconify/react";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <section className="container header-box">
        <img src={logo} alt="Logo Vinted" />
        <div className="header-box-text">
          <span className="src-bar">
            <Icon icon="ph:magnifying-glass-bold" /> Recherche des articles
          </span>
          <button className="button-white">S'inscrire</button>
          <button className="button-white">Se connecter</button>
          <button className="button-green">Vends tes articles</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
