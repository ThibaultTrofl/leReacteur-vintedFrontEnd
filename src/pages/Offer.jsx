import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ArticleOffer from "../components/ArticleOffer";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(data);
  const { id } = useParams();
  // console.log("id => " + id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        data.map((offerData) => {
          return <ArticleOffer data={offerData} id={id} key={id} />;
        })
      )}
    </>
  );
};

export default Offer;
