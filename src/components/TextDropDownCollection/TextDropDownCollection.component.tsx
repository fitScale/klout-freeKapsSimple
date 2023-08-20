"use client";

import BoxThemes from "@/helpers/functions/BoxThemes";
import TextDropDown, {
  TextDropDownProps,
} from "../TextDropDown/TextDropDown.component";
import style from "./TextDropDownCollection.module.css";
import { useState } from "react";
import { collectAppConfig } from "next/dist/build/utils";

export interface TextDropDownCollectionProps {
  heading: string;
  subText: string;
  dropDowns: TextDropDownProps[];
  darkTheme: boolean;
  desktop?: boolean;
  inital?: number;
}

const TextDropDownCollection = ({
  textDropDownCollectionConfig,
}: {
  textDropDownCollectionConfig: TextDropDownCollectionProps;
}) => {
  const desktop = textDropDownCollectionConfig.desktop;
  const inital = textDropDownCollectionConfig.inital;

  const [openMenu, setMenu] = useState<undefined | number>(
    inital || inital === 0 ? inital : undefined
  );

  const dark = textDropDownCollectionConfig.darkTheme;
  const themeTextColor = textDropDownCollectionConfig.darkTheme
    ? "white"
    : "black";

  const genCollections = (dropDowns: TextDropDownProps[]) => {
    const gen = [];
    for (let i = 0; i < dropDowns.length; i++) {
      gen.push(
        <TextDropDown
          textDropDownConfig={{
            ...dropDowns[i],
            darkTheme: dark,
            text: {
              ...dropDowns[i].text,
              color: themeTextColor,
              fontClass: "body-Small",
            },
            open: i === openMenu ? true : false,
            setMenu: setMenu,
            menuId: i,
          }}
        />
      );
    }
    return gen;
  };

  return (
    <div
      className={style.container}
      style={
        desktop ? { color: dark ? "white" : "black" } : BoxThemes("outer", dark)
      }
    >
      <div className={style.headingContainer}>
        <h4
          style={{
            color: desktop ? "white" : themeTextColor,
            textShadow: desktop
              ? "var( --textOutlineDark)"
              : dark
              ? "var( --textOutlineDark)"
              : "none",
          }}
        >
          {textDropDownCollectionConfig.heading}
        </h4>
        <p
          style={{
            color: desktop ? "white" : themeTextColor,
            textShadow: desktop ? "var(--blackHighlight)" : "none",
          }}
        >
          {textDropDownCollectionConfig.subText}
        </p>
      </div>
      <div className={style.dropDownContainer}>
        {genCollections(textDropDownCollectionConfig.dropDowns)}
      </div>
    </div>
  );
};

export default TextDropDownCollection;
