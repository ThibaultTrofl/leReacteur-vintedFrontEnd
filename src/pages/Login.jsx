import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import CustomInput from "../components/CustomInput";

const Login = ({ token, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/user/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);
      Cookies.set("token", response.data.token, { expires: 7 });
      console.log(response.data.token);
      setToken(response.data.token);
      if (token) {
        navigate("/");
      } else {
        <p>Mauvais email et/ou mot de passe</p>;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <main className="bcg-white">
        <section className="container">
          <div className="form-subscription">
            <h1>Se connecter</h1>
            <form onSubmit={handleSubmit}>
              <CustomInput
                value={email}
                setValue={setEmail}
                placeholder="Email"
                type="email"
                name="email"
                className="input-inup"
              />
              <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Mot de passe"
                type="password"
                name="password"
                className="input-inup"
              />
              <button type={"submit"} className="button-green">
                Se connecter
              </button>
            </form>
            <Link to="/signup">
              <p>Pas encore de compte ? Inscis-toi !</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
