import BoxThemes from "@/helpers/functions/BoxThemes";
import style from "./ImageTextBox.module.css";
import Image from "next/image";

export interface ImageTextBoxProps {
  heading: string;
  subText: string;
  darkTheme: boolean;
  src: string;
  background?: boolean;
}

const ImageTextBox = ({
  imageTextBoxConfig,
}: {
  imageTextBoxConfig: ImageTextBoxProps;
}) => {
  const dark = imageTextBoxConfig.darkTheme;
  const background = imageTextBoxConfig.background;

  return (
    <div
      className={style.container}
      style={{
        ...BoxThemes("outer", dark),
        backgroundColor: background ? "transparant" : "black",
      }}
    >
      <div className={style.headingContainer}>
        <h4>{imageTextBoxConfig.heading}</h4>
        <p>{imageTextBoxConfig.subText}</p>
      </div>
      <div
        className={style.imageContainer}
        style={{
          position: background ? "absolute" : "unset",
          top: background ? "0" : "unset",
          left: background ? "18px" : "unset",
          width: background ? "100%" : "calc(100% + 36px)",
        }}
      >
        {background && <div className={style.overlay}></div>}
        <Image fill src={imageTextBoxConfig.src} alt="" />
      </div>
    </div>
  );
};

export default ImageTextBox;
