import "./ResetPassword.scss";
import { useHistory } from "react-router";

const ResetPassword = () => {
  const history = useHistory();

  return (
    <div className="reset-password">
      <div className="reset-password__header">
        <div className="reset-password__decor"></div>
        <div className="reset-password__text">
          <h1 className="reset-password__title">AIDLY</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="reset-password__arraw"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>

      <div className="reset-password__main">
        <h1 className="reset-password__page-title">Забули пароль?</h1>
        <p className="reset-password__page-subtitle">
          Не хвилюйтеся. Введіть електронну пошту, пов’язану з вашим акаунтом, і
          ми надішлемо код для відновлення пароля.
        </p>

        <div className="reset-password__block">
          <label htmlFor="email" className="reset-password__label">
            Електронна адреса
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="reset-password__input"
            placeholder="Введіть електронну адресу"
          />
        </div>

        <button className="reset-password__button" onClick={() => {history.push("/register-code-for-password")}}>НАДІСЛАТИ КОД</button>
      </div>
    </div>
  );
};

export default ResetPassword;
