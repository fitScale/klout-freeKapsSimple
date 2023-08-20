import Link from "next/link";
import Svg, { SvgNames } from "../../../public/svgs/svgComponent/svg.component";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.componenet";
import StarsContainer from "../StarsContainer/StarsContainer.component";
import style from "./KloutCard.module.css";

export interface KloutCardProps {
  src: string;
  aspectRatio: string;
  title: string;
  price: string;
  values: {
    title: string;
    icon: SvgNames;
  }[];
  link: string;
  color?: string;
  selected?: boolean;
  descripton: string;
  checkout?: boolean;
}

const KloutCard = ({ config }: { config: KloutCardProps }) => {
  const generateValues = (
    values: {
      title: string;
      icon: SvgNames;
    }[]
  ) => {
    const gen = [];
    for (let i = 0; i < values.length; i++) {
      gen.push(
        <div>
          <Svg icon={values[i].icon} color="white" size="14px" />
          <p>{values[i].title.toUpperCase()}</p>
        </div>
      );
    }
    return gen;
  };

  return (
    <div
      className={style.container}
      style={{
        backgroundColor: config.selected
          ? "rgba(255, 255, 255, 0.2)"
          : "rgb(0, 0, 0, 0.5)",
        border: config.selected ? "2px solid white" : "2px solid grey",
      }}
    >
      <ImageContainer
        imageContainerConfig={{
          src: config.src,
          alt: config.title,
          aspectRatio: config.aspectRatio,
        }}
      />
      <p className={style.title}>{config.title.toUpperCase()}</p>
      <div className={style.description}>
        <p>{config.descripton}</p>
      </div>
      <p className={style.price}>
        {config.price}{" "}
        <span className={style.desktopServings} style={{ color: "grey" }}>
          ~ 25 SERVINGS
        </span>
      </p>
      <div className={style.stars}>
        <StarsContainer
          starsContainerConfig={{ stars: 5, color: "white", size: "16px" }}
        />
      </div>
      <div className={style.values}>{generateValues(config.values)}</div>
      {config.checkout && (
        <div className={style.selectP}>
          <p>SELECT PRODUCT</p>
        </div>
      )}
      <Link href={config.link}>
        <div
          className={style.cta}
          style={{
            backgroundColor: config.checkout
              ? "rgb(38, 38, 38)"
              : config.color
              ? config.color
              : "var(--primaryColor)",
            marginTop: config.checkout ? "0px" : "10px",
          }}
        >
          <p>MORE INFO</p>
        </div>
      </Link>
    </div>
  );
};

export default KloutCard;
