"use client";

import React from "react";
import style from "./TextDisplay.module.css";
import SetContext, {
  SetContextProps,
} from "@/helpers/components/SetContext/SetContext.component";

export interface TextDisplayProps {
  heading: string;
}

const TextDisplay = ({
  TextDisplayConfig,
  children,
}: {
  TextDisplayConfig: TextDisplayProps;
  children: React.ReactNode;
}) => {
  const setDarkThemeConfig: SetContextProps = {
    payload: true,
    type: "SET_DARK_THEME",
  };
  const setNavInvertConfig: SetContextProps = {
    payload: true,
    type: "SET_NAV_INVERT",
  };

  return (
    <>
      <SetContext setContextConfig={setDarkThemeConfig} />
      <SetContext setContextConfig={setNavInvertConfig} />
      <div className={style.container}>
        <div className={style.navOffset}></div>
        <h1>{TextDisplayConfig.heading}</h1>
        {children}
      </div>
    </>
  );
};

export default TextDisplay;
