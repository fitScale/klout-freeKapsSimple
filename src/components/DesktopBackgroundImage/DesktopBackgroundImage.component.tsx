import Image from "next/image";
import style from "./DesktopBackgroundImage.module.css";

export interface DesktopBackgroundImageProps {
  src: string;
}

const DesktopBackgroundImage = ({
  desktopBackgroundImageConfig,
}: {
  desktopBackgroundImageConfig: DesktopBackgroundImageProps;
}) => {
  return (
    <div className={style.container}>
      <div className={style.offset}></div>
      <div
        className={style.backgroundImage}
        style={{ backgroundImage: `url(${desktopBackgroundImageConfig.src})` }}
      ></div>
    </div>
  );
};

export default DesktopBackgroundImage;
