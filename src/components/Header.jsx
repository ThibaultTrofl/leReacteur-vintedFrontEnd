import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cookies from "js-cookie";

const Header = ({ setToken, token, search, setSearch }) => {
  return (
    <header>
      <section className="container header-box">
        <Link to="/">
          <img src={logo} alt="Logo Vinted" />
        </Link>
        <div className="header-box-text">
          <div className="src-bar">
            <label htmlFor="src-input">
              <Icon icon="ph:magnifying-glass-bold" />{" "}
            </label>
            <input
              type="text"
              placeholder="Recherche des articles"
              name="src-input"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          {token ? (
            <button
              className="button-red"
              onClick={() => {
                Cookies.remove("token");
                setToken("");
              }}
            >
              Se deconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="button-white">S'inscrire ici</button>
              </Link>
              <Link to="/login">
                <button className="button-white">Se connecter</button>
              </Link>
            </>
          )}
          {token ? (
            <Link to="/publish">
              <button className="button-green">Vends tes articles</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="button-green">Vends tes articles</button>
            </Link>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
