"use client";

import Image from "next/image";
import style from "./HorizontalTextImage.module.css";
import Link from "next/link";

export interface HorizontalTextImageProps {
  src: string;
  heading: string;
  subText: string;
  darkTheme: boolean;
  productImage?: boolean;
  hover?: boolean;
  link?: string;
  builder?: boolean;
}

const HorizontalTextImage = ({
  horizontalTextImageConfig,
}: {
  horizontalTextImageConfig: HorizontalTextImageProps;
}) => {
  const productImage = horizontalTextImageConfig.productImage;

  return horizontalTextImageConfig.link ? (
    <Link href={horizontalTextImageConfig.link}>
      <div
        className={style.container}
        style={{
          cursor: horizontalTextImageConfig.hover ? "pointer" : "default",
        }}
      >
        {productImage ? (
          <div className={style.productContainer}>
            <div className={style.radial}></div>
            <div className={style.productimage}>
              <Image fill alt="" src={horizontalTextImageConfig.src} />
            </div>
          </div>
        ) : (
          <div className={style.imageContainer}>
            <Image fill alt="" src={horizontalTextImageConfig.src} />
          </div>
        )}
        <div className={style.copyContainer}>
          <h4>{horizontalTextImageConfig.heading}</h4>
          <p>{horizontalTextImageConfig.subText}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div
      className={style.container}
      style={{
        cursor: horizontalTextImageConfig.hover ? "pointer" : "default",
      }}
      onClick={() => {
        if (horizontalTextImageConfig.builder) {
          alert("STACK BUILDER COMING SOON...");
        }
      }}
    >
      {productImage ? (
        <div className={style.productContainer}>
          <div className={style.radial}></div>
          <div className={style.productimage}>
            <Image fill alt="" src={horizontalTextImageConfig.src} />
          </div>
        </div>
      ) : (
        <div className={style.imageContainer}>
          <Image fill alt="" src={horizontalTextImageConfig.src} />
        </div>
      )}
      <div className={style.copyContainer}>
        <h4>{horizontalTextImageConfig.heading}</h4>
        <p>{horizontalTextImageConfig.subText}</p>
      </div>
    </div>
  );
};

export default HorizontalTextImage;
