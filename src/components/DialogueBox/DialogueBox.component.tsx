import BoxThemes from "@/helpers/functions/BoxThemes";
import Svg, { SvgNames } from "../../../public/svgs/svgComponent/svg.component";
import style from "./DialogueBox.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import wait from "@/helpers/functions/wait";

export interface DialogueBoxProps {
  Heading: string;
  icon: SvgNames;
  text: string;
  darkTheme: boolean;
  closeFn: Dispatch<SetStateAction<boolean>>;
  smallHeading?: boolean;
}

const DialogueBox = ({
  dialogueBoxConfig,
}: {
  dialogueBoxConfig: DialogueBoxProps;
}) => {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(true);
  }, []);

  const unmount = () => {
    setFade(false);
    wait(0.2).then(() => {
      dialogueBoxConfig.closeFn(false);
    });
  };
  const dark = dialogueBoxConfig.darkTheme;
  const themeTextColor = dark ? "white" : "black";

  return (
    <div className={`${style.container} ${fade ? style.bgshow : undefined}`}>
      <div
        className={`${style.dialogueBox} ${fade ? style.scaleUp : undefined}`}
        style={BoxThemes("outer", dark)}
      >
        <div className={style.heading}>
          <h4
            style={{
              fontSize: dialogueBoxConfig.smallHeading ? "15px" : "20px",
              color: themeTextColor,
              textShadow: dark ? "var(--textOutline)" : "none",
            }}
          >
            {dialogueBoxConfig.Heading}
          </h4>
          <Svg icon={dialogueBoxConfig.icon} color={themeTextColor} />
        </div>
        <p>{dialogueBoxConfig.text}</p>
        <div
          className={style.close}
          style={BoxThemes("inner", dark)}
          onClick={() => {
            unmount();
          }}
        >
          <p>Close</p>
          <Svg icon="XIcon" color="white" />
        </div>
      </div>
    </div>
  );
};

export default DialogueBox;
