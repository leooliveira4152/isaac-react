/** @jsxImportSource @emotion/react */
import React from "react";
import { Theme } from "../../theme";
import { css } from "@emotion/react";

import { DEFAULT_WINDOW_WIDTH, WINDOW_SIZES } from "../../common";
import { getWindowSize, processWindowSizes } from "../../scripts";

interface GridProps {
  children?: JSX.Element | JSX.Element[] | string;
  container?: boolean;
  item?: boolean;
  align?: React.CSSProperties["justifyContent"];
  style?: React.CSSProperties;
}

type WindowSizeProps = { [key in keyof typeof WINDOW_SIZES]?: number | false };

interface GridStyles {
  grid: React.CSSProperties;
  container: React.CSSProperties;
  item: React.CSSProperties;
}

/*
"item" and "container" are mutually exclusive
"align" property only works with container
"span" properties (xs, sm, md, lg, xl) only works with item
*/

const Grid = ({
  children,
  container,
  item,
  align,
  xs,
  sm,
  md,
  lg,
  xl,
  style,
}: GridProps & WindowSizeProps): JSX.Element => {
  const [screenSize, setScreenSize] = React.useState<string>(
    getWindowSize(window ? window.innerWidth : DEFAULT_WINDOW_WIDTH)
  );

  React.useEffect(() => {
    const changeScreenSize = () => setScreenSize(getWindowSize(window.innerWidth));
    window.addEventListener("resize", changeScreenSize);
    return () => window.removeEventListener("resize", changeScreenSize);
  }, []);

  const processedScreenSizes = processWindowSizes({ xs, sm, md, lg, xl });
  if (!container && !processedScreenSizes[screenSize]) return <></>;

  const styles: GridStyles = {
    grid: { textAlign: "center", display: "flex" },
    container: { width: "100%", justifyContent: align || "center", flexWrap: "wrap" },
    item: {
      width: `calc(${(Number(processedScreenSizes[screenSize]) / 12) * 100}% - ${Theme.spacing(2)})`,
      justifyContent: "center",
      alignItems: "center",
      padding: Theme.spacing(1),
    },
  };

  return (
    <div
      css={css({
        ...styles.grid,
        ...(container ? styles.container : item ? styles.item : {}),
        ...style,
      })}
    >
      {children}
    </div>
  );
};

export default Grid;
