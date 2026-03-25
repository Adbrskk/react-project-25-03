import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="contacts container">
      <h1 className="contacts__title">Контакты</h1>
      <div className="contacts__line"></div>

      <div className="contacts__info">
        <p className="contacts__info-text">· 8 800 000 00 00</p>
        <p className="contacts__info-text">· emailexample@email.com</p>
      </div>

      <div className="contacts__content">
        <div className="contacts__left">
          <form className="contacts-form">
            <div className="contacts-form__row">
              <input
                type="email"
                placeholder="Ваш email"
                className="contacts-form__input"
              />
              <input
                type="text"
                placeholder="Ваше имя"
                className="contacts-form__input"
              />
            </div>

            <textarea
              placeholder="Введите сообщение"
              className="contacts-form__textarea"
            ></textarea>

            <button type="submit" className="contacts-form__button">
              Отправить
            </button>
          </form>
        </div>

        <div className="contacts__right">
          <div className="contacts-socials">
            <h2 className="contacts-socials__title">Найдите нас:</h2>

            <div className="contacts-socials__icons">
              <img src="/snapchat-icon.png" alt="snapchat" />
              <img src="/facebook-icon-contact.png" alt="facebook" />
              <img src="/x-icon.png" alt="x" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;