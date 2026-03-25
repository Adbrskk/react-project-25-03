import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <h3 className="footer__title">Контакты</h3>
          <p className="footer__text">8 800 000 00 00</p>
          <p className="footer__text">emailexample@email.com</p>
          <p className="footer__copy">
            2024 Сникер-магазин. Все права защищены
          </p>
        </div>

        <div className="footer__right">
          <div className="footer__socials">
            <span><img src="./public/facebook-icon.png" alt="Facebook" /></span>
            <span><img src="./public/twitter-icon.png" alt="Twitter" /></span>
            <span><img src="./public/instagram-icon.png" alt="Instagram" /></span>
          </div>

          <div>
            <p className="footer__label">Введите свой email:</p>
            <div className="footer__line"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;