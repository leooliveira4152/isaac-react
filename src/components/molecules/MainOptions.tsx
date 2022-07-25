import React from "react";
import { useTranslation } from "react-i18next";

import { Button, Grid } from "../atoms";

interface MainOptionsProps {
  style?: React.CSSProperties;
}

interface MainOptionStyles {
  item: React.CSSProperties;
  button: React.CSSProperties;
}

const MainOptions = ({ style }: MainOptionsProps): JSX.Element => {
  const { t } = useTranslation();
  const styles: MainOptionStyles = { item: { maxWidth: "170px" }, button: { width: "100%" } };

  return (
    <Grid container align="space-around" style={style}>
      <Grid item xs={12} sm={10} lg={5} style={styles.item}>
        <Button style={styles.button}>{t("mainOptions.randomize")}</Button>
      </Grid>
      <Grid item xs={12} sm={10} lg={5} style={styles.item}>
        <Button style={styles.button}>{t("mainOptions.settings")}</Button>
      </Grid>
    </Grid>
  );
};

export default MainOptions;
