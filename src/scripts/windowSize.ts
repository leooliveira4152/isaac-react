import { WINDOW_SIZES } from "../common";
import { processedWindowSizesType, windowTypes } from "../types";

export const getWindowSize = (windowWidth: number): windowTypes => {
  for (const [size, pixels] of Object.entries(WINDOW_SIZES)) if (windowWidth > pixels) return size as windowTypes;
  return "xs";
};

export const processWindowSizes = (sizes: processedWindowSizesType): processedWindowSizesType => {
  let cached: number | false = false;
  for (const [size, value] of Object.entries(sizes))
    if (typeof value === "undefined") sizes[size] = cached;
    else cached = value;
  return sizes;
};
