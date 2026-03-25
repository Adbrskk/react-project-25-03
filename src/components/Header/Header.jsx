import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__logo">Сникер - магазин</div>

        <nav className="header__nav">
          <NavLink to="/" className="header__link">
            Главная
          </NavLink>
          <NavLink to="/cart" className="header__link">
            Корзина
          </NavLink>
          <NavLink to="/contacts" className="header__link">
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;