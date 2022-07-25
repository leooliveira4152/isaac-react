/** @jsxImportSource @emotion/react */
import React from "react";
import { Theme } from "../../theme";
import { css } from "@emotion/react";

interface ButtonProps {
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
}

interface ButtonStyles {
  button: React.CSSProperties;
  buttonHover: React.CSSProperties;
}

const Button = ({ children, onClick, style }: ButtonProps): JSX.Element => {
  const styles: ButtonStyles = {
    button: {
      color: Theme.colors.primary.main,
      background: Theme.colors.background.dark,
      border: `1px solid ${Theme.colors.primary.dark}${Theme.opacity(0.6)}`,
      borderRadius: Theme.spacing(1),
      padding: Theme.spacing(2),
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 900,
      cursor: "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    buttonHover: { background: Theme.colors.background.light },
  };

  const [onHover, setOnHover] = React.useState(false);

  return (
    <button
      onClick={onClick}
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
      css={css({ ...styles.button, ...style, ...(onHover ? styles.buttonHover : {}) })}
    >
      {children}
    </button>
  );
};

export default Button;
