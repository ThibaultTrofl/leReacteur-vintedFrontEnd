import { Link } from "react-router-dom";

const Article = ({ data }) => {
  //   console.log("article : " + username, price, brand, picture, _id);
  //   console.log(data);

  const size = data.product_details.find((e) => e.TAILLE);
  const brand = data.product_details.find((e) => e.MARQUE);
  //   console.log(brand);
  //   console.log(size);

  return (
    <article className="offer">
      <div className="user-box">
        {data.owner.account.avatar ? (
          <img src={data.owner.account.avatar.secure_url} alt="" />
        ) : null}
        <span>{data.owner.account.username}</span>
      </div>
      <Link to={`offer/${data._id}`}>
        <img src={data.product_image.secure_url} alt="" />
        <div className="down-offer">
          <span className="down-offer-price">
            {data.product_price.toFixed(2)} €
          </span>
          <div className="down-offer-size-brand">
            {size && <span>{size.TAILLE}</span>}
            {brand && <span>{brand.MARQUE}</span>}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Article;
