import * as Types from "../types";
import { CHARACTERS, COMPLETION_MARKS, TAINTED_CHARACTERS, USER_MARKS_CACHE_NAME } from "../common";

// Can't typescript typecheck a value cached in localStorage
const checkUserMarks = (userMarks: Types.userMarksType): Types.userMarksType | undefined => {
  const validCharacter = (marks: Types.userMarksCompletionMarksType | undefined): boolean => {
    if (!marks) return false;
    // Checking for true and false as a bootleg typecheck
    for (const mark of COMPLETION_MARKS)
      if (marks[mark] === undefined || (marks[mark] !== true && marks[mark] !== false)) return false;
    return true;
  };
  if (!userMarks.default || !userMarks.tainted) return;
  for (const character of CHARACTERS) if (!validCharacter(userMarks.default[character])) return;
  for (const character of TAINTED_CHARACTERS) if (!validCharacter(userMarks.tainted[character])) return;
  return userMarks;
};

const generateUserMarks = (): Types.userMarksType => {
  const emptyMarksObject: Types.userMarksCompletionMarksType = COMPLETION_MARKS.reduce(
    (accumulator, mark) => ({ ...accumulator, ...{ [mark]: false } }),
    {} as Types.userMarksCompletionMarksType
  );
  return {
    default: CHARACTERS.reduce(
      (accumulator, character) => ({ ...accumulator, ...{ [character]: emptyMarksObject } }),
      {}
    ) as Types.userMarksDefaultCharactersTypes,
    tainted: TAINTED_CHARACTERS.reduce(
      (accumulator, character) => ({ ...accumulator, ...{ [character]: emptyMarksObject } }),
      {}
    ) as Types.userMarksTaintedCharactersTypes,
  };
};

const getCachedUserMarks = (): Types.userMarksType | undefined => {
  if (!window) return;
  const cachedUserMarks: string | null = localStorage.getItem(USER_MARKS_CACHE_NAME);
  try {
    const parsedUserMarks: Types.userMarksType = JSON.parse(cachedUserMarks || "");
    return checkUserMarks(parsedUserMarks);
  } catch {
    return;
  }
};

export const saveUserMarks = (userMarks: Types.userMarksType): void =>
  localStorage.setItem(USER_MARKS_CACHE_NAME, JSON.stringify(userMarks));

export const getUserMarks = (): Types.userMarksType => {
  const cachedUserMarks = getCachedUserMarks();
  return cachedUserMarks || generateUserMarks();
};
