import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Welcome from "./pages/Welcome/Welcome";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import RegisterCode from "./pages/RegisterCode/RegisterCode";
import RegisterCodePassword from "./pages/RegisterCodePassword/RegisterCodePassword";
import SuccessVerification from "./pages/SuccessVerification/SuccessVerification";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import NewPassword from "./pages/NewPassword/NewPassword";
import PasswordSuccess from "./pages/PasswordSuccess/PasswordSuccess";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register-code" component={RegisterCode}></Route>
        <Route exact path="/register-code-for-password" component={RegisterCodePassword}></Route>
        <Route
          exact
          path="/success-verification"
          component={SuccessVerification}
        ></Route>
        <Route exact path="/reset-password" component={ResetPassword}></Route>
        <Route exact path="/new-password" component={NewPassword}></Route>
        <Route exact path="/success-password" component={PasswordSuccess}></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
