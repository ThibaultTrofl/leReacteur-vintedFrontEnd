import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import ArticleOffer from "../components/ArticleOffer";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // console.log(data);
  const { id } = useParams();
  // console.log("id => " + id);
  const location = useLocation();
  const { token } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/offer/${id}`);
      // console.log("response " + response);
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
        // data.map((offerData, index) => {
        // return (
        <ArticleOffer data={data} id={id} key={id} token={token} />
        // })
      )}
    </>
  );
};

export default Offer;
