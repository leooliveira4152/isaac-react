import * as Type from "./types";

// WINDOW
export const WINDOW_SIZES: Type.windowSizesType = { xl: 1200, lg: 992, md: 768, sm: 576, xs: 0 };
export const DEFAULT_WINDOW_WIDTH = 1366;

// LANGUAGE
export const LANGUAGES: string[] = ["pt", "en"];

// CHARACTERS / MARKS / NAMES
export const USER_MARKS_CACHE_NAME = "isaacUserMarks";
export const CHARACTER_CATEGORIES = ["default", "tainted"] as const;
export const CHARACTERS = [
  "Isaac",
  "Maggy",
  "Cain",
  "Judas",
  "Blue Baby",
  "Eve",
  "Samson",
  "Azazel",
  "Lazarus",
  "Eden",
  "Lost",
  "Lilith",
  "Keeper",
  "Apollyon",
  "Forgotten",
  "Bethany",
  "Jacob & Esau",
] as const;
export const TAINTED_CHARACTERS = [
  "Tainted Isaac",
  "Tainted Maggy",
  "Tainted Cain",
  "Tainted Judas",
  "Tainted Blue Baby",
  "Tainted Eve",
  "Tainted Samson",
  "Tainted Azazel",
  "Tainted Lazarus",
  "Tainted Eden",
  "Tainted Lost",
  "Tainted Lilith",
  "Tainted Keeper",
  "Tainted Apollyon",
  "Tainted Forgotten",
  "Tainted Bethany",
  "Tainted Jacob",
] as const;
export const COMPLETION_MARKS = [
  "Mom's Heart",
  "Boss Rush",
  "Isaac",
  "Blue Baby",
  "Satan",
  "The Lamb",
  "Ultra Greedier",
  "Hush",
  "Delirium",
  "Mother",
  "The Beast",
  "Mega Satan",
] as const;

// SWIPER
import { completionMarkPositionGetter } from "./scripts";
export const COMPLETION_PAGE_WIDTH = 250;
export const SWIPE_BLOCK_CLASSNAME = "block-swipe";
export const COMPLETION_MARKS_POSITIONS: Type.completionMarksPositions = {
  "Mom's Heart": completionMarkPositionGetter([82, 23, 40]),
  "Boss Rush": completionMarkPositionGetter([57, 111, 40]),
  Isaac: completionMarkPositionGetter([119, 52, 40]),
  "Blue Baby": completionMarkPositionGetter([163, 61, 40]),
  Satan: completionMarkPositionGetter([88, 71, 40]),
  "The Lamb": completionMarkPositionGetter([128, 98, 40]),
  "Ultra Greedier": completionMarkPositionGetter([208, 50, 40]),
  Hush: completionMarkPositionGetter([50, 155, 40]),
  Delirium: completionMarkPositionGetter([142, 5, 50]),
  Mother: completionMarkPositionGetter([98, 150, 40]),
  "The Beast": completionMarkPositionGetter([140, 163, 40]),
  "Mega Satan": completionMarkPositionGetter([179, 113, 40]),
};
