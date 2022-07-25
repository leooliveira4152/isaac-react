import { CHARACTERS, CHARACTER_CATEGORIES, COMPLETION_MARKS, TAINTED_CHARACTERS } from "./common";

export type windowTypes = "xl" | "lg" | "md" | "sm" | "xs";
export type windowSizesType = { [type in windowTypes]: number }; // size in pixels
export type processedWindowSizesType = { [key in windowTypes as string]?: number | false }; // size in columns (1 to 12) (0/false if hidden)

export type characterCategoryType = typeof CHARACTER_CATEGORIES[number];
export type charactersType = typeof CHARACTERS[number];
export type taintedCharactersType = typeof TAINTED_CHARACTERS[number];
export type completionMarks = typeof COMPLETION_MARKS[number];

export type userMarksCompletionMarksType = { [key in completionMarks]: boolean };
export type userMarksDefaultCharactersTypes = { [key in charactersType]: userMarksCompletionMarksType };
export type userMarksTaintedCharactersTypes = { [key in taintedCharactersType]: userMarksCompletionMarksType };
export type userMarksType = { default: userMarksDefaultCharactersTypes; tainted: userMarksTaintedCharactersTypes };

export type completionMarksPosition = { left: number; top: number; width: number };
export type completionMarksPositions = { [key in completionMarks]: completionMarksPosition };
