const ArticleOffer = ({ data, id }) => {
  //   console.log("Oui");
  console.log(data.owner.account);
  return (
    <article className="select-offer container">
      <img src={data.product_image.secure_url} alt={data.product_description} />

      <div className="select-offer-product">
        <p>{data.product_price.toFixed(2)} €</p>

        <ul className="select-offer-line-detail">
          {data.product_details.map((detail) => {
            console.log(detail);
            const keyName = Object.keys(detail);
            return (
              <>
                <li>
                  <span className="offer-title">{keyName}</span>
                  <span>{detail[keyName]}</span>
                </li>
              </>
            );
          })}
        </ul>

        <div className="select-offer-line">
          <span className="select-offer-line-name">{data.product_name}</span>
          <span>{data.product_description}</span>
        </div>
        <div className="select-offer-user">
          {!data.owner.account.avatar ? null : (
            <img src={data.owner.account.avatar.secure_url} alt="Avatar" />
          )}
          <span>{data.owner.account.username}</span>
        </div>
        <button className="select-offer-buy">Acheter</button>
      </div>
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
