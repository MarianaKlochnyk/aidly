import "./Login.scss";
import googleIcon from "../../images/icons/google.svg";
import appleIcon from "../../images/icons/apple.svg";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  return (
    <div className="login">
      <div className="login__header">
        <div className="login__decor"></div>
        <div className="login__text">
          <h1 className="login__title">AIDLY</h1>
          <p className="login__subtitle">
            Приєднуйтеся до спільноти, щоб допомагати та отримувати підтримку.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="login__arraw"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <h1 className="login__page-title">Вхід</h1>
      <div className="login__main">
        <div className="login__inputs">
          <div className="login__block-obj">
            <label htmlFor="email" className="login__label">
              Електронна адреса
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="login__input"
              placeholder="Введіть електронну адресу"
            />
          </div>

          <div className="login__block-obj">
            <label htmlFor="password" className="login__label">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="login__input"
              placeholder="Введіть пароль"
            />
            <button onClick={() => {history.push("/reset-password")}} className="login__password-btn">Забули пароль?</button>
          </div>
        </div>

        <button className="login__button">УВІЙТИ</button>

        <p className="login__or">або</p>

        <div className="login__buttons-sm">
          <button className="login__button-sm">
            <img
              src={googleIcon}
              alt="Google Icon"
              className="login__icon-sm"
            />
          </button>
          <button className="login__button-sm">
            <img src={appleIcon} alt="Apple Icon" className="login__icon-sm" />
          </button>
        </div>
      </div>
      <div className="login__ready-account">
        <p className="login__question">Ще не маєте акаунта?</p>
        <button
          className="login__ready-button"
          onClick={() => history.push("/register")}
        >
          Зареєструватися
        </button>
      </div>
    </div>
  );
};

export default Login;
