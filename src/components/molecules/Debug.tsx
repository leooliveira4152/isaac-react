import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

import { Theme } from "../../theme";
import { getWindowSize } from "../../scripts";
import { Button, Grid, Select } from "../atoms";

import { DEFAULT_WINDOW_WIDTH, LANGUAGES } from "../../common";

import { changeLanguage } from "i18next";

interface DebugStyles {
  main: React.CSSProperties;
  item: React.CSSProperties;
  button: React.CSSProperties;
  select: React.CSSProperties;
}

const Debug = (): JSX.Element => {
  const { t } = useTranslation();

  const [expand, setExpand] = React.useState<boolean>(false);

  const [screenSize, setScreenSize] = React.useState<string>(
    getWindowSize(window ? window.innerWidth : DEFAULT_WINDOW_WIDTH)
  );
  React.useEffect(() => {
    const changeScreenSize = (): void => setScreenSize(getWindowSize(window.innerWidth));
    window.addEventListener("resize", changeScreenSize);
    return () => window.removeEventListener("resize", changeScreenSize);
  }, []);

  const styles: DebugStyles = {
    main: {
      background: Theme.colors.background.light,
      borderRadius: Theme.spacing(1),
      maxWidth: "500px",
      minWidth: expand ? "320px" : "",
      position: "absolute",
      top: "20px",
      width: expand ? "40%" : "auto",
      zIndex: 15,
    },
    item: { fontSize: Theme.font.size.small },
    button: { width: "100%" },
    select: { background: "transparent", border: "transparent" },
  };

  const debugElements = [
    <>
      Language:
      <Select
        size="small"
        options={LANGUAGES.map((language) => ({ label: language.toUpperCase(), value: language }))}
        defaultValue={i18n.language}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => changeLanguage(event.target.value)}
        style={styles.select}
      />
    </>,
    <>Screen: {screenSize.toUpperCase()}</>,
  ];

  return (
    <Grid container align="space-between" style={styles.main}>
      <Grid item xs={expand ? 3 : 12}>
        <Button onClick={() => setExpand(!expand)} style={styles.button}>
          {t("debug.trigger")}
        </Button>
      </Grid>
      <>
        {expand &&
          debugElements.map((element, index) => (
            <Grid item key={index} xs={9 / debugElements.length} style={styles.item}>
              {element}
            </Grid>
          ))}
      </>
    </Grid>
  );
};

export default Debug;
