import { useState, useEffect } from "react";
import axios from "axios";

// Image --------
import crop from "../assets/crop-image.svg";
import banniere from "../assets/hero-main.png";

// Composant --------
import Article from "../components/Article.jsx";
// import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //   console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
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
  }, []);
  //   console.log(datas);
  return (
    <main>
      <section className="container home-box">
        <div className="img-home">
          <img src={banniere} alt="" className="home-banniere" />
          <img src={crop} alt="Découpage" className="crop-banniere" />
        </div>
        {!isLoading ? (
          <div className="articles-box">
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
