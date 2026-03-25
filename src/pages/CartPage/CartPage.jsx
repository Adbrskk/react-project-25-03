import { useContext } from "react";
import ProductsContext from "../../context";
import "./CartPage.css";

function CartPage() {
  const { cartData, deleteFromCart } = useContext(ProductsContext);

  const totalPrice = cartData.reduce((sum, item) => {
    return sum + Number(item.price);
  }, 0);

  return (
    <section className="cart container">
      <h1 className="cart__title">Корзина</h1>
      <div className="cart__line"></div>

      <div className="cart__content">
        <div className="cart__list">
          {cartData.length === 0 ? (
            <p className="cart__empty">Корзина пуста</p>
          ) : (
            cartData.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item__img"
                />

                <div className="cart-item__divider"></div>

                <div className="cart-item__info">
                  <h3 className="cart-item__title">{item.name}</h3>
                </div>

                <div className="cart-item__price-block">
                  <p className="cart-item__label">ЦЕНА:</p>
                  <p className="cart-item__price">{item.price} €</p>
                </div>

                <button
                  className="cart-item__delete"
                  onClick={() => deleteFromCart(item.id)}
                  type="button"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary">
          <h2 className="cart-summary__title">Итого</h2>

          <div className="cart-summary__products">
            {cartData.map((item) => (
              <p key={item.id} className="cart-summary__name">
                {item.name}
              </p>
            ))}
          </div>

          <div className="cart-summary__bottom">
            <p className="cart-summary__label">ЦЕНА:</p>
            <p className="cart-summary__price">{totalPrice} €</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;