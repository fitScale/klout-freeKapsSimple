import Svg from "../../../public/svgs/svgComponent/svg.component";
import style from "./StarsContainer.module.css";

export interface StarsContainerProps {
  stars: number;
  color: string;
  size?: string;
}

const StarsContainer = ({
  starsContainerConfig,
}: {
  starsContainerConfig: StarsContainerProps;
}) => {
  const size = starsContainerConfig.size;

  const generateStars = (stars: number) => {
    const gen = [];
    for (let i = 0; i < stars; i++) {
      gen.push(
        <Svg
          icon="StarIcon"
          size={size ? size : "27px"}
          color={starsContainerConfig.color}
          stroke="white"
        />
      );
    }
    if (stars < 5) {
      for (let i = 0; i < 5 - stars; i++) {
        gen.push(
          <Svg
            icon="StarIcon"
            size={size ? size : "27px"}
            color="var(--bg600)"
            stroke="white"
          />
        );
      }
    }
    return gen;
  };

  return <div>{generateStars(starsContainerConfig.stars)}</div>;
};

export default StarsContainer;
