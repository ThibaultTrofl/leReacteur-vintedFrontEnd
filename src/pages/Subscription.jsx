import { useState } from "react";
import CustomInput from "../components/CustomInput";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Subscription = ({ setToken, token }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(username);
      const response = await axios.post(
        // `https://site--backend-vinted--tq978s5f6htc.code.run/user/signup`,
        `http://localhost:3000/user/signup`,
        {
          account: {
            username: username,
          },
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );
      Cookies.set("token", response.data.token, { expires: 7 });

      console.log(response.data.token);

      setToken(response.data.token);

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputClick = (event) => {
    // event.preventDefault();
    setNewsletter(!newsletter);
  };

  return (
    <>
      <main className="bcg-white">
        <section className="container">
          <div className="form-subscription">
            <h1>S'inscrire</h1>
            <form action="" onSubmit={handleSubmit} className="form-signup">
              <CustomInput
                value={username}
                setValue={setUsername}
                placeholder="Nom d'utilisateur"
                type="text"
                id="username"
                className="input-inup"
              />
              <CustomInput
                value={email}
                setValue={setEmail}
                placeholder="Email"
                type="email"
                id="email"
                className="input-inup"
              />
              <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Mot de passe"
                type="password"
                id="password"
                className="input-inup"
              />
              <div className="newsletter">
                <input
                  className="checkbox"
                  type="checkbox"
                  value={newsletter}
                  onClick={handleInputClick}
                />
                <span>S'inscire à notre newsletter</span>
              </div>
              <p className="legal-mention">
                En m'inscrivant je confirme avoir lu et accepté les Termes &
                Conditions et Politique de Confidentialité de Vinted. Je
                confirme avoir au moins 18 ans.
              </p>
              <button type={"submit"} className="button-green">
                S'inscire
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Subscription;
