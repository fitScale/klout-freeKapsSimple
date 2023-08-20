import Link from "next/link";
import style from "./CtaButton.module.css";

export interface CtaButtonConfig {
  text: string;
  link: string;
  color?: string;
}

const CtaButton = ({ config }: { config: CtaButtonConfig }) => {
  return (
    <Link href={config.link}>
      <p
        className={style.cta}
        style={{
          backgroundColor: config.color ? config.color : "var(--primaryColor)",
        }}
      >
        {config.text.toUpperCase()}{" "}
      </p>
    </Link>
  );
};

export default CtaButton;
