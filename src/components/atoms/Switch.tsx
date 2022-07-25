/** @jsxImportSource @emotion/react */
import React from "react";
import { Theme } from "../../theme";
import { css } from "@emotion/react";

type availableSwitchSizes = "small" | "medium" | "large";

interface SwitchProps {
  size?: availableSwitchSizes;
  style?: React.CSSProperties;
  taintedStyle?: boolean;
  value?: boolean;
  onChange?: (checked: boolean) => unknown;
}

interface SwitchStyles {
  main: React.CSSProperties;
  switch: React.CSSProperties;
  label: React.CSSProperties;
  button: React.CSSProperties;
  bloodButton: React.CSSProperties;
  buttonTransition: React.CSSProperties;
}

const Switch = ({ size, taintedStyle, onChange, value, style }: SwitchProps): JSX.Element => {
  const buttonPadding = 3;
  const switchSizes: { [key in availableSwitchSizes]: { width: number; height: number } } = {
    small: { width: 35, height: 20 },
    medium: { width: 50, height: 30 },
    large: { width: 80, height: 40 },
  };

  const [checked, setChecked] = React.useState<boolean>(value || false);

  const styles: SwitchStyles = {
    main: { ...switchSizes[size || "medium"] },
    switch: { height: 0, width: 0, visibility: "hidden" },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      width: "100%",
      height: "100%",
      background: "grey",
      borderRadius: "100vh",
      position: "relative",
      transition: "background-color .2s",
    },
    button: {
      position: "absolute",
      left: buttonPadding,
      height: `calc(100% - ${2 * buttonPadding}px)`,
      aspectRatio: "1 / 1",
      borderRadius: "100vh",
      transition: "0.3s",
      background: "#fff",
      boxShadow: "0 0 2px 0 rgba(10, 10, 10, 0.29)",
    },
    bloodButton: {
      content: `url(${require("../../assets/others/blood.png")})`,
      opacity: checked ? 1 : 0,
      background: "none",
    },
    buttonTransition: { left: `calc(100% - ${buttonPadding}px)`, transform: "translateX(-100%)" },
  };

  return (
    <div css={css({ ...styles.main, ...style })}>
      <input type="checkbox" css={css({ ...styles.switch })} />
      <label
        onClick={() => {
          setChecked(!checked);
          if (onChange) onChange(!checked);
        }}
        css={css({ ...styles.label })}
      >
        <span css={css({ ...styles.button, ...(checked ? styles.buttonTransition : {}) })} />
        {taintedStyle && (
          <span css={css({ ...styles.button, ...styles.bloodButton, ...(checked ? styles.buttonTransition : {}) })} />
        )}
      </label>
    </div>
  );
};

export default Switch;
