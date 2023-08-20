"use client";

import BoxThemes from "@/helpers/functions/BoxThemes";
import Svg, { SvgNames } from "../../../public/svgs/svgComponent/svg.component";
import style from "./FeaturedIconBox.module.css";
import { useState } from "react";
import DialogueBox, {
  DialogueBoxProps,
} from "../DialogueBox/DialogueBox.component";

export interface FeaturedIconBoxProps {
  icon: SvgNames;
  heading: string;
  subtext: string;
  information: string;
  darkTheme: boolean;
  minWidth?: string;
  smallHeading?: boolean;
  bold?: boolean;
  className?: string;
}

const FeaturedIconBox = ({
  featuredIconBoxConfig,
}: {
  featuredIconBoxConfig: FeaturedIconBoxProps;
}) => {
  const [infoOpen, setInfoOpen] = useState(false);

  const dark = featuredIconBoxConfig.darkTheme;
  const themeTextColor = featuredIconBoxConfig.darkTheme ? "white" : "black";

  const dialogueBoxConfig: DialogueBoxProps = {
    Heading: featuredIconBoxConfig.heading,
    text: featuredIconBoxConfig.information,
    icon: featuredIconBoxConfig.icon,
    darkTheme: dark,
    closeFn: setInfoOpen,
    smallHeading: featuredIconBoxConfig.smallHeading,
  };

  return (
    <>
      <div
        className={`${style.container} ${featuredIconBoxConfig.className} ${
          dark ? style.dark : style.light
        }`}
        style={{
          minWidth: featuredIconBoxConfig.minWidth,
          border: true ? "1px solid white" : BoxThemes("outer", dark).border,
        }}
        onClick={() => {
          setInfoOpen(true);
        }}
      >
        <Svg icon={featuredIconBoxConfig.icon} color={themeTextColor} />
        <div className={style.headingContainer}>
          <p style={{ color: themeTextColor }}>
            {featuredIconBoxConfig.heading}
          </p>
        </div>
        <p className={style.subtext}>{featuredIconBoxConfig.subtext}</p>
        <p className={`${style.moreInfo} body-XSmall underline`}>
          View Details
        </p>
      </div>
      {infoOpen && <DialogueBox dialogueBoxConfig={dialogueBoxConfig} />}
    </>
  );
};

export default FeaturedIconBox;
