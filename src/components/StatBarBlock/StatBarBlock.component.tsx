import BoxThemes from "@/helpers/functions/BoxThemes";
import TextIconCombo, {
  TextIconComboProps,
} from "../TextIconCombo/TextIconCombo.component";
import style from "./StatBarBlock.module.css";

export type StatBar = {
  level: number;
  text: TextIconComboProps;
  adjective: string;
};

export interface StatBarBlockProps {
  stats: StatBar[];
  mainCopy: string;
  color: string;
  darkTheme: boolean;
}

export const generateStatBars = (
  stats: StatBar[],
  textColor: string,
  themeColor: string,
  containerClass: string,
  copyClass: string,
  barClass: string,
  iconSize?: string
) => {
  const gen = [];
  for (let i = 0; i < stats.length; i++) {
    gen.push(
      <div className={containerClass}>
        <div className={copyClass}>
          <TextIconCombo
            textIconComboConfig={{
              ...stats[i].text,
              color: textColor,
              fontClass: "body-B-Small",
              size: iconSize,
            }}
          />
          <p>-</p>
          <p>{stats[i].adjective}</p>
        </div>
        <div
          className={barClass}
          style={{
            backgroundColor: themeColor,
            border: `1px solid ${textColor}`,
            width: `${stats[i].level}%`,
          }}
        ></div>
      </div>
    );
  }
  return gen;
};

const StatBarBlock = ({
  statBarBlockConfig,
}: {
  statBarBlockConfig: StatBarBlockProps;
}) => {
  const dark = statBarBlockConfig.darkTheme;
  const themeTextColor = dark ? "white" : "black";

  const generateStatBars = (stats: StatBar[]) => {
    const gen = [];
    for (let i = 0; i < stats.length; i++) {
      gen.push(
        <div className={style.statBarContainer}>
          <div className={style.statBarCopy}>
            <TextIconCombo
              textIconComboConfig={{
                ...stats[i].text,
                color: themeTextColor,
                fontClass: "body-B-Small",
              }}
            />
            <p>~</p>
            <p>{stats[i].adjective}</p>
          </div>
          <div
            className={style.statBar}
            style={{
              backgroundColor: statBarBlockConfig.color,
              border: `1px solid ${themeTextColor}`,
              width: `${stats[i].level}%`,
            }}
          ></div>
        </div>
      );
    }
    return gen;
  };

  return (
    <div
      className={style.container}
      style={BoxThemes("outer", statBarBlockConfig.darkTheme)}
    >
      <div className={style.copyContainer}>
        <h4
          style={{
            color: themeTextColor,
            textShadow: dark ? "var(--textOutline)" : "none",
          }}
        >
          SHOW ME THE STATS:
        </h4>
        <p>{statBarBlockConfig.mainCopy}</p>
      </div>
      <div className={style.barsContainer}>
        {generateStatBars(statBarBlockConfig.stats)}
      </div>
    </div>
  );
};

export default StatBarBlock;
