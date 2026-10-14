import { useState, useEffect } from "react";
import "./Welcome.scss";
import splashImg from "../../images/splash_img.png";

const Welcome = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome ${isLoaded ? "welcome--loaded" : ""}`}>
      <h1 className="welcome__title">AIDLY</h1>
      
      <h2 className="welcome__subtitle">
        Допомога поруч, коли вона потрібна
      </h2>

      <div className="welcome__conteiner">
        <img src={splashImg} alt="Welcome Image" className="welcome__image" />
        
        <div className="welcome__choice">
          <div className="welcome__text">
            <h2 className="welcome__text--title">Разом можемо більше.</h2>
            <p className="welcome__text--subtitle">
              Знаходьте підтримку або допомагайте тим, хто її потребує.
            </p>
          </div>
          <div className="welcome__buttons">
            <button className="button welcome__buttons--create">
              СТВОРИТИ АКАУНТ
            </button>
            <button className="button welcome__buttons--sign">
              УВІЙТИ
            </button>
          </div>
          <div className="welcome__msg">
            <p className="msg">Умови використання</p>
            <p className="msg">Політика конфіденційності</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;