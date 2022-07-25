import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, SwiperOptions } from "swiper";
import "../../assets/css/swiper.css";
import "../../assets/css/swiperNavigation.css";
import "swiper/css/effect-fade";

import * as Types from "../../types";
import { Slide } from "./";
import {
  CHARACTERS,
  COMPLETION_PAGE_WIDTH,
  DEFAULT_WINDOW_WIDTH,
  SWIPE_BLOCK_CLASSNAME,
  TAINTED_CHARACTERS,
} from "../../common";
import { Grid, Switch } from "../atoms";

interface SwiperProps {
  userMarks: Types.userMarksType;
  characterType: Types.characterCategoryType;
}

interface SwiperStyles {
  swiper: React.CSSProperties;
}

const SwiperComponent = ({ userMarks, characterType }: SwiperProps): JSX.Element => {
  const [screenSize, setScreenSize] = React.useState<number>(window ? window.innerWidth : DEFAULT_WINDOW_WIDTH);
  React.useEffect((): (() => void) => {
    const changeScreenSize = (): void => setScreenSize(window.innerWidth);
    window.addEventListener("resize", changeScreenSize);
    return () => window.removeEventListener("resize", changeScreenSize);
  }, []);

  const styles: SwiperStyles = { swiper: { height: 420 } };

  const swiperProps: SwiperOptions = {
    allowTouchMove: false,
    direction: "vertical",
    effect: "fade",
    modules: [EffectFade],
    noSwipingClass: SWIPE_BLOCK_CLASSNAME,
    slidesPerView: 1,
  };

  const characterSwiperProps: SwiperOptions = {
    centeredSlides: true,
    loop: true,
    modules: [Navigation],
    navigation: true,
    noSwipingClass: SWIPE_BLOCK_CLASSNAME,
    slidesPerView: Math.floor((screenSize * 0.8) / (COMPLETION_PAGE_WIDTH + 30)),
    spaceBetween: 30,
  };

  type SwiperHTMLElement = HTMLElement & { swiper?: { slideTo: (slideIndex: number) => unknown } };
  const swiper = React.useRef<SwiperHTMLElement>();
  const changeCharacterTypeSlide = (checked: boolean) => swiper?.current?.swiper?.slideTo(checked ? 1 : 0);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Swiper onInit={(core: SwiperCore) => (swiper.current = core.el)} {...swiperProps} style={styles.swiper}>
          <SwiperSlide>
            <Swiper {...characterSwiperProps}>
              {CHARACTERS.map((character) => (
                <SwiperSlide key={`${character}`}>
                  <Slide characterType={characterType} character={character} marks={userMarks.default[character]} />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper {...characterSwiperProps}>
              {TAINTED_CHARACTERS.map((character) => (
                <SwiperSlide key={`${character}`}>
                  <Slide characterType={characterType} character={character} marks={userMarks.tainted[character]} />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </Grid>
      <Grid item xs={12}>
        <Switch taintedStyle onChange={changeCharacterTypeSlide} />
      </Grid>
    </Grid>
  );
};

export default SwiperComponent;
