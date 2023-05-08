import { useState, useEffect } from "react";
import axios from "axios";

// Image --------
import crop from "../assets/crop-image.svg";
import banniere from "../assets/hero-main.png";

// Composant --------
import Article from "../components/Article.jsx";
// import { Link } from "react-router-dom";

const Home = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(5000);
  const [sort, setSort] = useState("price-desc");
  //   console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        // console.log(data.offers);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, priceMax, priceMin, sort]);
  //   console.log(datas);
  return (
    <main>
      <section className="nav-bar-offer container">
        <input
          className="button-white"
          type="checkbox"
          onChange={() => {
            sort !== "price-desc"
              ? setSort("price-desc")
              : setSort("price-asc");
          }}
        />
        <input
          className="button-white"
          type="text"
          value={priceMin}
          onChange={(event) => {
            setPriceMin(event.target.value);
          }}
        />
        <input
          className="button-white"
          type="text"
          value={priceMax}
          onChange={(event) => {
            setPriceMax(event.target.value);
          }}
        />
      </section>
      <section className="home-box">
        <div className="img-home">
          <img src={banniere} alt="" className="home-banniere" />
          <img src={crop} alt="Découpage" className="crop-banniere" />
        </div>
        {!isLoading ? (
          <div className="container articles-box">
            {data.offers.map((data, index) => {
              // console.log(data._id);
              return (
                <>
                  <Article data={data} key={data._id} />
                </>
              );
            })}
          </div>
        ) : (
          <p>Loading ...</p>
        )}

        {/* <p>{datas[0].owners.account.username}</p> */}
      </section>
    </main>
  );
};

export default Home;
