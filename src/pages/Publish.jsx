import { useState } from "react";
import CustomInput from "../components/CustomInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [etat, setEtat] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [trade, setTrade] = useState(true);

  const handleSubmitPublish = async (event) => {
    event.preventDefault();
    // console.log(token);
    try {
      const formData = new FormData();

      formData.append("picture", image);
      console.log(image);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("condition", etat);
      formData.append("color", color);
      formData.append("city", location);
      formData.append("price", price);
      formData.append("status", "available");

      const response = await axios.post(
        `https://site--backend-vinted--tq978s5f6htc.code.run/offer/publish`,
        formData,
        {
          headers: { autorizations: `Bearer ${token}` },
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(response.data._id);
      navigate(`/offer/${response.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="publish-page bcg-gry">
        <div className="container">
          <main className="publish-box">
            <h1>Vends ton article</h1>
            <form action="" className="form-publish">
              <div className="set-publish-group set-publish-group-file">
                <input
                  className="set-publish-input set-publish-input-file "
                  type="file"
                  placeholder="Ajouter une Photo"
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                  id="image"
                />
              </div>

              <div className="set-publish-group">
                <div className="set-publish">
                  <label htmlFor="title">Titre</label>
                  <CustomInput
                    className="set-publish-input"
                    type="text"
                    placeholder="ex: Chemise Sézane verte"
                    value={title}
                    setValue={setTitle}
                    name="title"
                  />
                </div>
                <div className="set-publish set-publish-descr">
                  <label htmlFor="description">Décris ton article</label>
                  <textarea
                    className="set-publish-input"
                    cols="33"
                    rows="5"
                    type="text"
                    placeholder="ex: porté quelquefois, taille correctement"
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                    id="descritpion"
                  />
                </div>
              </div>

              <div className="set-publish-group">
                <div className="set-publish">
                  <label htmlFor="brand">Marque</label>
                  <CustomInput
                    className="set-publish-input"
                    type="text"
                    placeholder="ex: Zara"
                    value={brand}
                    setValue={setBrand}
                    id="brand"
                  />
                </div>
                <div className="set-publish">
                  <label htmlFor="size">Taille</label>
                  <CustomInput
                    className="set-publish-input"
                    type="text"
                    placeholder="ex:L/40/12"
                    value={size}
                    setValue={setSize}
                    id="size"
                  />
                </div>
                <div className="set-publish">
                  <label htmlFor="color">Couleur</label>
                  <CustomInput
                    className="set-publish-input"
                    type="text"
                    placeholder="ex: Fushia"
                    value={color}
                    setValue={setColor}
                    id="color"
                  />
                </div>
                <div className="set-publish">
                  <label htmlFor="etat">Etat</label>
                  <CustomInput
                    className="set-publish-input"
                    type="text"
                    placeholder="ex: Neuf avec étiquette"
                    value={etat}
                    setValue={setEtat}
                    id="etat"
                  />
                </div>
                <div className="set-publish">
                  <label htmlFor="location">Lieu</label>
                  <CustomInput
                    className="set-publish-input"
                    type="text"
                    placeholder="ex: Paris"
                    value={location}
                    setValue={setLocation}
                    id="location"
                  />
                </div>
              </div>
              <div className="set-publish-group">
                <div className="set-publish">
                  <label htmlFor="price">Prix</label>
                  <CustomInput
                    className="set-publish-input"
                    type="number"
                    placeholder="ex: 0,00 €"
                    value={price}
                    setValue={setPrice}
                    id="price"
                  />
                </div>
                <div className="set-publish-checkbox">
                  <input
                    className="set-publish-input-checkbox"
                    type="checkbox"
                    placeholder={null}
                    value={trade}
                    onChange={() => {
                      setTrade(!trade);
                    }}
                    id="trade"
                  />
                  <label htmlFor="trade">
                    Je suis intéressé(e) par les échanges
                  </label>
                </div>
              </div>
              <button className="button-green" onClick={handleSubmitPublish}>
                Ajouter
              </button>
            </form>
          </main>
        </div>
      </section>
    </>
  );
};

export default Publish;
