import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import OptionsPanel from "./components/OptionsPanel";
import CustomizePanel from "./components/CustomizePanel";
import Mannequin from "./components/Mannequin";
import "./styles/styles.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="app">
        <OptionsPanel />
        <Mannequin />
        <CustomizePanel />
      </div>
    </Provider>
  );
};

export default App;
