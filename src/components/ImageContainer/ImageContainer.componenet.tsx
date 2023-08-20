import Image from "next/image";
import style from "./ImageContainer.module.css";
import React from "react";

export interface ImageContainerProps {
  src: string;
  alt: string;
  aspectRatio: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  view?: boolean;
  blur?: string;
}

const ImageContainer = ({
  imageContainerConfig,
}: {
  imageContainerConfig: ImageContainerProps;
}) => {
  return (
    <div
      className={`${style.container} ${imageContainerConfig.className}`}
      style={{
        aspectRatio: imageContainerConfig.aspectRatio,
        height: imageContainerConfig.height,
      }}
    >
      {imageContainerConfig.blur ? (
        <Image
          fill
          placeholder="blur"
          blurDataURL={imageContainerConfig.blur}
          src={imageContainerConfig.src}
          alt={imageContainerConfig.alt}
          style={imageContainerConfig.style}
        />
      ) : (
        <Image
          fill
          src={imageContainerConfig.src}
          alt={imageContainerConfig.alt}
          style={imageContainerConfig.style}
        />
      )}
    </div>
  );
};

export default ImageContainer;
