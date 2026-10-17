import "./NewPassword.scss";
import { useHistory } from "react-router";

const NewPassword = () => {
  const history = useHistory();

  return (
    <div className="new-password">
      <div className="new-password__header">
        <div className="new-password__decor"></div>
        <div className="new-password__text">
          <h1 className="new-password__title">AIDLY</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="new-password__arraw"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <div className="new-password__main">
        <div className="new-password__page-text">
          <h1 className="new-password__page-title">Створіть новий пароль</h1>
          <p className="new-password__page-subtitle">
            Новий пароль має відрізнятися від попереднього та містити щонайменше
            8 символів.
          </p>
        </div>
        <div className="new-password__inputs">
          <div className="new-password__block-obj">
            <label htmlFor="password" className="new-password__label">
              Пароль
            </label>
            <input
              type="password"
              name="email"
              id="password"
              className="new-password__input"
              placeholder="Введіть електронну адресу"
            />
          </div>

          <div className="new-password__block-obj">
            <label htmlFor="confirm-password" className="new-password__label">
              Пітвердження пароля
            </label>
            <input
              type="password"
              name="password"
              id="confirm-password"
              className="new-password__input"
              placeholder="Введіть пароль"
            />
          </div>
        </div>

        <button onClick = {() => {history.push("/success-password")}} className="new-password__button">ЗМІНИТИ ПАРОЛЬ</button>
      </div>
    </div>
  );
};

export default NewPassword;
