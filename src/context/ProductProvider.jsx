import { useEffect, useState } from "react";
import axios from "axios";
import ProductsContext from "./index";

const BASE_URL = "https://69c39e43b780a9ba03e75a21.mockapi.io";

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/productsData`);
      setProducts(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
    }
  };

  const fetchCartData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cartData`);
      setCartData(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке корзины:", error);
    }
  };

  const addToCart = async (product) => {
    try {
      const isAlreadyInCart = cartData.some(
        (item) => item.productId === product.id
      );

      if (isAlreadyInCart) {
        alert("Товар уже в корзине");
        return;
      }

      const cartItem = {
        productId: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
      };

      await axios.post(`${BASE_URL}/cartData`, cartItem);
      fetchCartData();
    } catch (error) {
      console.error("Ошибка при добавлении в корзину:", error);
    }
  };

  const deleteFromCart = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/cartData/${id}`);
      fetchCartData();
    } catch (error) {
      console.error("Ошибка при удалении из корзины:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCartData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartData,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;