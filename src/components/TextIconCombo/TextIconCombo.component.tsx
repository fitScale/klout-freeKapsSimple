import Svg, { SvgNames } from "../../../public/svgs/svgComponent/svg.component";
import style from "./TextIconCombo.module.css";

export interface TextIconComboProps {
  icon: SvgNames;
  text: string;
  color?: string;
  fontClass?: string;
  size?: string;
}

const TextIconCombo = ({
  textIconComboConfig,
}: {
  textIconComboConfig: TextIconComboProps;
}) => {
  const size = textIconComboConfig.size;

  return (
    <div className={style.container}>
      <Svg
        icon={textIconComboConfig.icon}
        color={textIconComboConfig.color}
        size={size ? size : undefined}
      />
      <p
        className={textIconComboConfig.fontClass}
        style={{
          color: textIconComboConfig.color
            ? textIconComboConfig.color
            : "black",
        }}
      >
        {textIconComboConfig.text}
      </p>
    </div>
  );
};

export default TextIconCombo;
