/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import * as Types from "./types";
import { Theme } from "./theme";
import { getUserMarks } from "./scripts";
import { Debug, MainOptions, Swiper } from "./components/molecules";
import { Grid, Switch } from "./components/atoms";

const { REACT_APP_DEBUG } = process.env;

interface GridStyle {
  container: React.CSSProperties;
  swiper: React.CSSProperties;
  mainOptions: React.CSSProperties;
}

interface AppStyle {
  main: React.CSSProperties;
  grid: GridStyle;
  mainOptions: React.CSSProperties;
}

const App = (): JSX.Element => {
  const styles: AppStyle = {
    main: {
      alignItems: "center",
      background: Theme.colors.background.main,
      color: Theme.colors.primary.main,
      display: "flex",
      fontSize: Theme.font.size.main,
      justifyContent: "center",
      minHeight: "100vh",
      minWidth: "360px",
      textAlign: "center",
    },
    grid: {
      container: {},
      swiper: {
        WebkitMaskImage:
          "-webkit-linear-gradient(left, rgba(255,255,255,0) 1%,rgba(255,255,255,1) 30%,rgba(255,255,255,1) 70%,rgba(255,255,255,0) 99%)",
      },
      mainOptions: { background: "blue" },
    },
    mainOptions: {},
  };

  const [showTainted, setShowTainted] = React.useState<boolean>(false);
  const userMarks = React.useMemo<Types.userMarksType>(() => getUserMarks(), []);

  return (
    <div css={css({ ...styles.main })}>
      {REACT_APP_DEBUG && <Debug />}
      <Grid container align="space-around" style={styles.grid.container}>
        <Grid item xs={10} style={styles.grid.swiper}>
          <Swiper userMarks={userMarks} characterType={showTainted ? "tainted" : "default"} />
        </Grid>
        <Grid item xs={6} lg={4} style={styles.grid.mainOptions}>
          <MainOptions style={styles.mainOptions} />
        </Grid>
        <Grid item xs={12}>
          <Switch taintedStyle onChange={setShowTainted} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
