import { info } from "console";
import Svg, { SvgNames } from "../../../public/svgs/svgComponent/svg.component";
import ImageContainer from "../ImageContainer/ImageContainer.componenet";
import style from "./infoBox.module.css";

export interface infoBoxProps {
  title: string;
  copy: string;
  src: string;
  info?: { icon: SvgNames; title: string };
}

const InfoBox = ({ config }: { config: infoBoxProps }) => {
  return (
    <div className={style.container}>
      <h4>{config.title}</h4>
      <ImageContainer
        imageContainerConfig={{
          src: config.src,
          alt: "",
          aspectRatio: "372/98",
          className: style.image,
        }}
      />
      <p>{config.copy}</p>
      {config.info && (
        <div className={style.info}>
          <Svg icon={config.info.icon} color="white" />
          <p>{config.info.title}</p>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
