import React, { MouseEventHandler, useState } from "react";
import { css } from "@emotion/react";
import { Theme } from "../../theme";

interface ButtonProps {
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: MouseEventHandler;
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
      border: `1px solid ${Theme.colors.primary.dark}88`,
      borderRadius: "4px",
      padding: "8px",
      textAlign: "center",
      fontSize: "16px",
      cursor: "pointer",
      fontFamily: "Roboto",
      minWidth: "50px"
    },
    buttonHover: { background: Theme.colors.background.light }
  };

  const [onHover, setOnHover] = useState(false);
  const anotherStyle = css({
    textDecoration: "underline",
    color: "blue"
  });
  return (
    <button
      onClick={onClick}
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
      style={{ ...styles.button, ...style, ...(onHover ? styles.buttonHover : {}) }}
    >
      {children}
    </button>
  );
};

export default Button;
