const ArticleOffer = ({ data, id }) => {
  console.log("Oui");
  console.log(data.find((e) => e._id === id));
  return (
    <article className="select-offer">
      {/* <div className="user-box">
        {data.owner.account.avatar ? (
          <img src={data.owner.account.avatar.secure_url} alt="" />
        ) : null}
        <span>{data.owner.account.username}</span>
      </div>
      <img src={data.product_image.secure_url} alt="" />
      <div className="down-offer">
        <span className="down-offer-price">
          {data.product_price.toFixed(2)} €
        </span>
        <div className="down-offer-size-brand">
          {size && <span>{size.TAILLE}</span>}
          {brand && <span>{brand.MARQUE}</span>}
        </div>
      </div> */}
    </article>
  );
};

export default ArticleOffer;
