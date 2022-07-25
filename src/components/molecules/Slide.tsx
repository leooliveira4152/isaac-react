/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import * as Types from "../../types";
import { Grid } from "../atoms";
import { Theme } from "../../theme";
import {
  COMPLETION_MARKS,
  COMPLETION_MARKS_POSITIONS,
  COMPLETION_PAGE_WIDTH,
  SWIPE_BLOCK_CLASSNAME,
} from "../../common";

interface SlideProps {
  characterType: Types.characterCategoryType;
  character: Types.charactersType | Types.taintedCharactersType;
  marks: Types.userMarksCompletionMarksType;
}

interface _SlideStyles {
  page: React.CSSProperties;
  characterIcon: React.CSSProperties;
  characterText: React.CSSProperties;
}

type SlideStyles = { grid: _SlideStyles } & _SlideStyles;

type IconsProps = { marks: Types.userMarksCompletionMarksType };

const Icons = ({ marks }: IconsProps): JSX.Element => {
  return (
    <>
      {COMPLETION_MARKS.map((mark) => {
        const [active, setActive] = React.useState<boolean>(marks[mark]);
        const styles: React.CSSProperties = {
          position: "absolute",
          opacity: active ? 1 : 0,
          cursor: "pointer",
          transition: "opacity 0.3s",
        };
        return (
          <img
            key={mark}
            onClick={() => setActive(!active)}
            src={require(`../../assets/completionMarks/${encodeURI(mark)}.png`)}
            css={css({ ...styles, ...COMPLETION_MARKS_POSITIONS[mark] })}
            className={SWIPE_BLOCK_CLASSNAME}
          />
        );
      })}
    </>
  );
};

const Slide = ({ characterType, character, marks }: SlideProps): JSX.Element => {
  const styles: SlideStyles = {
    grid: {
      page: {},
      characterIcon: { height: "75px", marginTop: Theme.spacing(3) },
      characterText: {},
    },
    page: { width: COMPLETION_PAGE_WIDTH },
    characterIcon: { height: "100%" },
    characterText: {},
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <img
          src={require("../../assets/completionMarks/isaacCompletionPage.png")}
          style={styles.page}
          className={SWIPE_BLOCK_CLASSNAME}
        />
        <Icons marks={marks} />
      </Grid>
      <Grid item xs={12} style={styles.grid.characterIcon}>
        <img src={require(`../../assets/characters/${encodeURI(character)}.png`)} style={styles.characterIcon} />
      </Grid>
      <Grid item xs={12} style={{ fontFamily: "Isaac", fontSize: Theme.font.size.largest, width: "190px" }}>
        {character}
      </Grid>
    </Grid>
  );
};

export default Slide;
