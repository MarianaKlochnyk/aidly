import './SplashScreen.scss';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SplashScreen = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.replace("/welcome");
    }, 1500);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <section className="splash-screen">
      <h1 className="splash-screen__title">AIDLY</h1>

      <h2 className="splash-screen__subtitle">
        Допомога поруч, коли вона потрібна
      </h2>
    </section>
  );
};

export default SplashScreen;