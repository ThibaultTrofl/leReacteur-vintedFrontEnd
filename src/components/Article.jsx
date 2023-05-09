import { Link } from "react-router-dom";

const Article = ({ data, token }) => {
  //   console.log("article : " + username, price, brand, picture, _id);
  //   console.log(data);
  // console.log(token);
  const size = data.product_details.find((e) => e.product_size);
  const brand = data.product_details.find((e) => e.product_brand);
  // console.log(brand);
  // console.log(size);

  return (
    <article className="offer">
      <div className="user-box">
        {data.owner.account.avatar ? (
          <img src={data.owner.account.avatar.secure_url} alt="" />
        ) : null}
        <span>{data.owner.account.username}</span>
      </div>
      <Link to={`offer/${data._id}`} state={{ token: token }}>
        <img src={data.product_image} alt="" />
        <div className="down-offer">
          <span className="down-offer-price">
            {data.product_price.toFixed(2)} €
          </span>
          <div className="down-offer-size-brand">
            {size && <span>{size.product_size}</span>}
            {brand && <span>{brand.product_brand}</span>}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Article;
