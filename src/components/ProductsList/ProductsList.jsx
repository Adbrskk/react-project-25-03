import { useContext } from "react";
import ProductsContext from "../../context";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

function ProductsList() {
  const { products } = useContext(ProductsContext);

  if (!products.length) {
    return <p className="products-list__status">Загрузка товаров...</p>;
  }

  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;