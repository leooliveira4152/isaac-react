import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Theme } from "./theme";
import { MainOptions } from "./components/molecules";

import { useTranslation } from "react-i18next";

interface AppStyle {
  main: React.CSSProperties;
  mainOptions: React.CSSProperties;
}

function App() {
  const { t } = useTranslation();
  const styles: AppStyle = {
    main: {
      color: Theme.colors.primary.main,
      background: Theme.colors.background.main
    },
    mainOptions: {
      background: "red",
      width: "60%"
    }
  };

  return (
    <div className="App" style={styles.main}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <MainOptions style={styles.mainOptions} />
    </div>
  );
}

export default App;
