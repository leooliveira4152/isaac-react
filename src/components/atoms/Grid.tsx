/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { MouseEventHandler, useState } from "react";
import { Theme } from "../../theme";

interface GridProps {
  children?: JSX.Element | JSX.Element[] | string;
  container?: boolean;
  item?: boolean;
  align?: React.CSSProperties["justifyContent"];
  span?: number;
  style?: React.CSSProperties;
}

interface GridStyles {
  grid: React.CSSProperties;
  container: React.CSSProperties;
  item: React.CSSProperties;
}

/*
"item" and "container" are mutually exclusive
"align" property only works with container
"span" property only works with item
*/

const Button = ({ children, container, item, align, span, style }: GridProps): JSX.Element => {
  const styles: GridStyles = {
    grid: { textAlign: "center", display: "flex", margin: Theme.spacing(1) },
    container: { width: "100%", justifyContent: align },
    item: { width: `${span ? (span / 12) * 100 : 100}%` }
  };

  return (
    <div
      css={css({ "&:last-child": { padding: "40px" } })}
      style={{ ...styles.grid, ...(container ? styles.container : item ? styles.item : {}), ...style }}
    >
      {children}
    </div>
  );
};

export default Button;
