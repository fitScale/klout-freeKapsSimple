"use client";

import { Dispatch, SetStateAction, useState } from "react";
import TextIconCombo, {
  TextIconComboProps,
} from "../TextIconCombo/TextIconCombo.component";
import style from "./TextDropDown.module.css";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import BoxThemes from "@/helpers/functions/BoxThemes";
import { text } from "node:stream/consumers";

export interface TextDropDownProps {
  text: TextIconComboProps;
  copy: string;
  darkTheme?: boolean;
  setMenu?: Dispatch<SetStateAction<number | undefined>>;
  menuId?: number;
  desktop?: boolean;
  open?: boolean;
}

const TextDropDown = ({
  textDropDownConfig,
}: {
  textDropDownConfig: TextDropDownProps;
}) => {
  const dark = textDropDownConfig.darkTheme;
  const themeTextColor = textDropDownConfig.darkTheme ? "white" : "black";
  const setMenu = textDropDownConfig.setMenu;
  const menuID = textDropDownConfig.menuId;

  return (
    <div
      className={`${style.container} ${dark ? style.dark : style.light}`}
      style={
        textDropDownConfig
          ? BoxThemes("outer", dark ? dark : false)
          : BoxThemes("inner", dark ? dark : false)
      }
    >
      <div
        className={style.heading}
        onClick={() => {
          if (textDropDownConfig.open && setMenu) {
            setMenu(undefined);
          } else if (setMenu && menuID) {
            setMenu(textDropDownConfig.menuId);
          } else if (setMenu && menuID === 0) {
            setMenu(textDropDownConfig.menuId);
          }
        }}
      >
        <TextIconCombo textIconComboConfig={textDropDownConfig.text} />
        <Svg icon="DropDownIcon" color={themeTextColor} />
      </div>
      {textDropDownConfig.open && <p>{textDropDownConfig.copy}</p>}
    </div>
  );
};

export default TextDropDown;
