import "./SuccessVerification.scss";

const SuccessVerification = () => {
  return (
    <div className="success-verification">
      <div className="success-verification__header">
        <div className="success-verification__decor"></div>
        <div className="success-verification__text">
          <h1 className="success-verification__title">AIDLY</h1>
        </div>
      </div>

      <div className="success-verification__main">
        <div className="success-verification__page-text">
          <h1 className="success-verification__page-title">
            Електронну адресу підтверджено
          </h1>
          <p className="success-verification__page-subtitle">Ваш акаунт Aidly створено.</p>
        </div>

        <div className="success-verification__btn">
            <button className="success-verification__button">ПРОДОВЖИТИ</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessVerification;
