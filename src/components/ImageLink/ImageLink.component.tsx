import Link from "next/link";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.componenet";
import style from "./ImageLink.module.css";

export interface ImagelinkProps {
  text: string;
  textColor: string;
  darkTheme?: boolean;
  image: ImageContainerProps;
  link: string;
}

const ImageLink = ({
  ImageLinkConfig,
}: {
  ImageLinkConfig: ImagelinkProps;
}) => {
  return (
    <Link href={ImageLinkConfig.link}>
      <div
        className={style.container}
        style={{
          border: ImageLinkConfig.darkTheme
            ? "1px solid white"
            : "1px solid black",
        }}
      >
        <ImageContainer imageContainerConfig={ImageLinkConfig.image} />
        <div className={style.background}></div>
        <p style={{ color: ImageLinkConfig.textColor }}>
          {ImageLinkConfig.text}
        </p>
      </div>
    </Link>
  );
};

export default ImageLink;
