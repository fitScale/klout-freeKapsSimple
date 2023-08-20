"use client";

import BoxThemes from "@/helpers/functions/BoxThemes";
import Svg, { SvgNames } from "../../../public/svgs/svgComponent/svg.component";
import style from "./FeaturedIconCounter.module.css";
import { useEffect, useRef, useState } from "react";
import wait from "@/helpers/functions/wait";
import TextIconCombo, {
  TextIconComboProps,
} from "../TextIconCombo/TextIconCombo.component";
import useOnScreen from "@/helpers/hooks/useOnScreen";

export interface FeaturedIconCounterProps {
  headerBefore: string;
  headingAfter: string;
  total: number;
  icon: SvgNames;
  darkTheme: boolean;
}

const FeaturedIconCounter = ({
  featuredIconCounterConfig,
}: {
  featuredIconCounterConfig: FeaturedIconCounterProps;
}) => {
  const [number, setNumber] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const setCount = async (total: number, current: number) => {
    if (current <= total) {
      if (current < total * 0.85) {
        setNumber(current);
        await wait(0.001);
        setCount(total, current + 156);
      } else {
        setNumber(current);
        await wait(0.001);
        setCount(total, current + 50);
      }
    }
  };

  useEffect(() => {
    if (isVisible) {
      setCount(featuredIconCounterConfig.total, number);
    }
    if (!isVisible) {
      setNumber(0);
    }
  }, [isVisible]);

  const dark = featuredIconCounterConfig.darkTheme;
  const themeTextColor = dark ? "white" : "black";

  const textIconComboConfig: TextIconComboProps = {
    text: featuredIconCounterConfig.headingAfter,
    icon: "FireIcon",
    color: themeTextColor,
  };

  return (
    <div ref={ref} className={style.container} style={BoxThemes("outer", dark)}>
      <p className="body-B-Medium underline">
        {featuredIconCounterConfig.headerBefore} {number.toLocaleString()}
      </p>
      <TextIconCombo textIconComboConfig={textIconComboConfig} />
    </div>
  );
};

export default FeaturedIconCounter;
