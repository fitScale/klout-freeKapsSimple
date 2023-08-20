import Link from "next/link";
import style from "./CtaLink.module.css";
import Svg, { SvgNames } from "../../../public/svgs/svgComponent/svg.component";

export interface CtaLinkProps {
  href: string;
  text: string;
  svg: SvgNames;
  backgroundColor: string;
  textColor: string;
  size: number;
  darkTheme?: boolean;
}

const CtaLink = ({ ctaLinkConfig }: { ctaLinkConfig: CtaLinkProps }) => {
  return (
    <Link href={ctaLinkConfig.href}>
      <div
        className={style.container}
        style={{
          border: ctaLinkConfig.darkTheme ? "" : "1px solid black",
          backgroundColor: ctaLinkConfig.backgroundColor,
        }}
      >
        <p>{ctaLinkConfig.text}</p>
        <Svg
          icon={ctaLinkConfig.svg}
          color={ctaLinkConfig.textColor}
          size={String(ctaLinkConfig.size - 3)}
        />
      </div>
    </Link>
  );
};

export default CtaLink;
