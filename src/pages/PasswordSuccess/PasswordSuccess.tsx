import "./PasswordSuccess.scss";

const PasswordSuccess = () => {
  return (
    <div className="success-password">
      <div className="success-password__header">
        <div className="success-password__decor"></div>
        <div className="success-password__text">
          <h1 className="success-password__title">AIDLY</h1>
        </div>
      </div>

      <div className="success-password__main">
        <div className="success-password__page-text">
          <h1 className="success-password__page-title">Пароль змінено </h1>
          <p className="success-password__page-subtitle">
            Ваш пароль успішно оновлено. Тепер ви можете увійти в акаунт,
            використовуючи новий пароль.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccess;
