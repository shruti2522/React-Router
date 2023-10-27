import React from "react";
import { Provider } from "react-redux"; 
import AuthentificationState from "../Auth.state";
import Routing from "./Routing";
import "./App.css";

const App = () => {
  return (
    <Provider>
      <AuthentificationState>
        <Routing />
      </AuthentificationState>
    </Provider>
  );
};

export default App;
