"use client";

import Link from "next/link";
import style from "./CtaButton.module.css";
import va from "@vercel/analytics";

export interface CtaButtonConfig {
  text: string;
  link: string;
  color?: string;
  disable?: boolean;
}

const CtaButton = ({ config }: { config: CtaButtonConfig }) => {
  return (
    <Link
      href={config.link}
      onClick={() => {
        if (!config.disable) {
          va.track("Claim");
        }
      }}
    >
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
