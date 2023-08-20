import { CSSProperties } from "react";
import style from "./RingSpinner.module.css";

export interface RingSpinnerProps {
  color: string;
}

const RingSpinner = ({
  ringSpinnerConfig,
}: {
  ringSpinnerConfig: RingSpinnerProps;
}) => {
  const color = ringSpinnerConfig.color;

  return (
    <div className={style.ldsring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default RingSpinner;
