"use client";

import style from "./MobileBackgroundImage.module.css";

export interface MobileBackgroundImageProps {
  src: string;
}

const MobileBackgroundImage = ({
  mobileBackgroundImageConfig,
}: {
  mobileBackgroundImageConfig: MobileBackgroundImageProps;
}) => {
  return (
    <div
      className={style.backgroundImage}
      style={{ backgroundImage: `url(${mobileBackgroundImageConfig.src})` }}
    ></div>
  );
};

export default MobileBackgroundImage;
