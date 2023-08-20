import Link from "next/link";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import style from "./LinkButton.module.css";

export interface LinkButtonProps {
  text: string;
  link: string;
}

const LinkButton = ({
  linkButtonConfig,
}: {
  linkButtonConfig: LinkButtonProps;
}) => {
  return (
    <Link href={linkButtonConfig.link}>
      <div className={style.container}>
        <p className="body-B-Small">{linkButtonConfig.text}</p>
        <Svg icon="ArrowIcon" size="15px" />
      </div>
    </Link>
  );
};

export default LinkButton;
