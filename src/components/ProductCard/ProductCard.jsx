import { useContext } from "react";
import ProductsContext from "../../context";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(ProductsContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card__image"
      />

      <h3 className="product-card__title">{product.name}</h3>

      <div className="product-card__bottom">
        <div>
          <p className="product-card__label">ЦЕНА:</p>
          <p className="product-card__price">{product.price} €</p>
        </div>

        <button
          className="product-card__button"
          onClick={handleAddToCart}
          type="button"
        >
          +
        </button>
      </div>
    </article>
  );
}

export default ProductCard;