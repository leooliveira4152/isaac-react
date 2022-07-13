import React from "react";
import { Button, Grid } from "../atoms";
import { Theme } from "../../theme";

import { useTranslation } from "react-i18next";

interface MainOptionsProps {
  style?: React.CSSProperties;
}

interface MainOptionStyles {
  button: React.CSSProperties;
}

const MainOptions = ({ style }: MainOptionsProps): JSX.Element => {
  const { t } = useTranslation();
  const styles: MainOptionStyles = { button: { margin: Theme.spacing(1), width: "100%" } };

  return (
    <Grid container align="space-around" style={style}>
      <Grid item span={6}>
        <Button style={styles.button}>{t("mainOptions.randomize")}</Button>
      </Grid>
      <Grid item span={6}>
        <Button style={styles.button}>{t("mainOptions.settings")}</Button>
      </Grid>
    </Grid>
  );
};

export default MainOptions;
