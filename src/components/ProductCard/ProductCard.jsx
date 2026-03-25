import "./ProductCard.css";

function ProductCard({ image, name, price }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} className="product-card__image" />

      <h3 className="product-card__title">{name}</h3>

      <div className="product-card__bottom">
        <div>
          <p className="product-card__label">ЦЕНА:</p>
          <p className="product-card__price">{price} €</p>
        </div>

        <button className="product-card__button">+</button>
      </div>
    </article>
  );
}

export default ProductCard;