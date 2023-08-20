"use client";

import style from "./ElementSlider.module.css";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import { useRef } from "react";

export interface ElementSliderProps {
  heading: string;
  darkTheme: boolean;
}

const ElementSlider = ({
  elementSliderConfig,
  children,
}: {
  elementSliderConfig: ElementSliderProps;
  children: React.ReactNode;
}) => {
  const themeTextColor = elementSliderConfig.darkTheme ? "white" : "black";

  return (
    <>
      <div className={style.heading}>
        <p style={{ color: themeTextColor }}>{elementSliderConfig.heading}</p>
        <Svg icon="ArrowSkinnyIcon" color={themeTextColor} />
      </div>
      <div className={style.slider}>
        <div>{children}</div>
      </div>
    </>
  );
};

export default ElementSlider;
