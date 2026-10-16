import "./Register.scss";
import googleIcon from "../../images/icons/google.svg";
import appleIcon from "../../images/icons/apple.svg";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  return (
    <div className="register">
      <div className="register__header">
        <div className="register__decor"></div>
        <div className="register__text">
          <h1 className="register__title">AIDLY</h1>
          <p className="register__subtitle">
            Приєднуйтеся до спільноти, щоб допомагати та отримувати підтримку.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="register__arraw"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <h1 className="register__main-title">Реєстрація</h1>
      <div className="register__main">
        <div className="register__inputs">
          <div className="register__block">
            <div className="register__block-obj">
              <label htmlFor="name" className="register__label">
                Ім'я
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="register__input block-input"
                placeholder="Введіть ім’я"
              />
            </div>

            <div className="register__block-obj">
              <label htmlFor="surname" className="register__label">
                Прізвище
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                className="register__input block-input"
                placeholder="Введіть прізвище"
              />
            </div>
          </div>

          <div className="register__block-obj">
            <label htmlFor="email" className="register__label">
              Електронна адреса
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="register__input"
              placeholder="Введіть електронну адресу"
            />
          </div>

          <div className="register__block-obj">
            <label htmlFor="password" className="register__label">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="register__input"
              placeholder="Введіть пароль"
            />
          </div>

          <div className="register__block-obj">
            <label htmlFor="repeatpassword" className="register__label">
              Підтвердження пароля
            </label>
            <input
              type="password"
              name="repeatpassword"
              id="repeatpassword"
              className="register__input"
              placeholder="Повторіть пароль"
            />
          </div>
        </div>

        <div className="register__checkbox-conteiner">
          <input id="terms" type="checkbox" className="register__checkbox" />
          <label htmlFor="terms" className="register__checkbox-label">
            <span className="register__checkbox-label-span">
              Я погоджуюся з
            </span>{" "}
            Умовами використання та Політикою конфіденційності
          </label>
        </div>

        <button className="register__button" onClick = {() => {history.push("register-code")}}>СТВОРИТИ АКАУНТ</button>
      </div>
      <p className="register__or">або</p>

      <div className="register__buttons-sm">
        <button className="register__button-sm">
          <img
            src={googleIcon}
            alt="Google Icon"
            className="register__icon-sm"
          />
        </button>
        <button className="register__button-sm">
          <img src={appleIcon} alt="Apple Icon" className="register__icon-sm" />
        </button>
      </div>

      <div className="register__ready-account">
        <p className="register__question">Вже маєте аккаунт?</p>
        <button
          className="register__ready-button"
          onClick={() => history.push("/login")}
        >
          Увійти
        </button>
      </div>
    </div>
  );
};

export default Register;
