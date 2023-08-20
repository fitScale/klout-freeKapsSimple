import FeaturedIconBox, {
  FeaturedIconBoxProps,
} from "../FeaturedIconBox/FeaturedIconBox.component";
import style from "./ValuesGrid.module.css";

export interface ValuesGridProps {
  values: FeaturedIconBoxProps[];
  darkTheme: boolean;
  bold?: boolean;
}

const ValuesGrid = ({
  valuesGridConfig,
}: {
  valuesGridConfig: ValuesGridProps;
}) => {
  const generateValueBoxes = (values: FeaturedIconBoxProps[]) => {
    const gen = [];
    for (let i = 0; i < values.length; i++) {
      gen.push(
        <FeaturedIconBox
          featuredIconBoxConfig={{
            ...values[i],
            darkTheme: valuesGridConfig.darkTheme,
            bold: valuesGridConfig.bold ? true : false,
          }}
        />
      );
    }
    return gen;
  };
  return (
    <div className={style.container}>
      {generateValueBoxes(valuesGridConfig.values)}
    </div>
  );
};

export default ValuesGrid;
