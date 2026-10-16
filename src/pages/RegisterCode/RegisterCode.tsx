import "./RegisterCode.scss";
import { useHistory } from "react-router";

const RegisterCode = () => {
  const history = useHistory();
  return (
    <div className="register-code">
      <div className="register-code__header">
        <div className="register-code__decor"></div>
        <div className="register-code__text">
          <h1 className="register-code__title">AIDLY</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="register-code__arraw"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <div className="register-code__main">
        <div className="register-code__page-text">
          <h1 className="register-code__page-title">Реєстрація</h1>
          <p className="register-code__page-subtitle">
            Ми надіслали код на a•••••@gmail.com. Введіть його нижче, щоб
            підтвердити адресу.
          </p>
        </div>

        <div className="register-code__inputs">
          <div className="register-code__block">
            <label htmlFor="input"></label>
            <input id="input" type="text" className="register-code__input" />
          </div>

          <div className="register-code__block">
            <label htmlFor="input" className="visually-hidden"></label>
            <input id="input" type="text" className="register-code__input" />
          </div>

          <div className="register-code__block">
            <label htmlFor="input" className="visually-hidden"></label>
            <input id="input" type="text" className="register-code__input" />
          </div>

          <div className="register-code__block">
            <label htmlFor="input" className="visually-hidden"></label>
            <input id="input" type="text" className="register-code__input" />
          </div>

          <div className="register-code__block">
            <label htmlFor="input" className="visually-hidden"></label>
            <input id="input" type="text" className="register-code__input" />
          </div>

          <div className="register-code__block">
            <label htmlFor="input" className="visually-hidden"></label>
            <input id="input" type="text" className="register-code__input" />
          </div>
        </div>

        <div className="register-code__btn">
          <button
            onClick={() => {
              history.push("/success-verification");
            }}
            className="register-code__button"
          >
            ПРОДОВЖИТИ
          </button>
        </div>

        <div className="register-code__time">
          <p className="register-code__time-txt">
            Надіслати код повторно через 00:43
          </p>
        </div>
      </div>

      <div className="register-code__email-conteiner">
        <p className="register-code__email-text">Не та електронна адреса?</p>
        <button className="register-code__email-btn">Змінити email</button>
      </div>

      <div></div>
    </div>
  );
};

export default RegisterCode;
