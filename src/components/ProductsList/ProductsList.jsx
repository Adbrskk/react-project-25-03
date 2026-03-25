import { useContext } from "react";
import ProductsContext from "../../context";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

function ProductsList() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;