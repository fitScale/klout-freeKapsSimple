import Link from "next/link";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.componenet";
import StarsContainer, {
  StarsContainerProps,
} from "../StarsContainer/StarsContainer.component";
import style from "./OfferBlock.module.css";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import React from "react";

export interface OfferBlockProps {
  image: ImageContainerProps;
  stars: StarsContainerProps;
  price: string;
  servings: string;
  color: string;
  link: string;
  heading: string;
  offset?: string;
  servingsText?: string;
}

const OfferBlock = ({
  offerBlockConfig,
  children,
}: {
  offerBlockConfig: OfferBlockProps;
  children: React.ReactNode;
}) => {
  return (
    <div className={style.offerBlockContainer}>
      <div className={style.offerBackground}></div>
      <div className={style.offerBlockHeader}>
        <h4>{offerBlockConfig.heading}</h4>
        {children}
      </div>
      <div
        className={style.offerImage}
        style={{
          top: offerBlockConfig.offset ? offerBlockConfig.offset : "-20px",
        }}
      >
        <ImageContainer imageContainerConfig={offerBlockConfig.image} />
      </div>
      <div className={style.offerFooter}>
        <div className={style.offerMetrics}>
          <StarsContainer starsContainerConfig={offerBlockConfig.stars} />
          <p className="body-Small">{offerBlockConfig.price}</p>
          <p className="body-Small underline">
            {offerBlockConfig.servings}{" "}
            {offerBlockConfig.servingsText
              ? offerBlockConfig.servingsText
              : "Serv."}
          </p>
        </div>
        <Link href={offerBlockConfig.link}>
          <div
            className={style.offerCTA}
            style={{ backgroundColor: offerBlockConfig.color }}
          >
            <p className="body-B-Medium">MORE INFO</p>
            <Svg icon="ArrowIcon" color="white" size="16px" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OfferBlock;
