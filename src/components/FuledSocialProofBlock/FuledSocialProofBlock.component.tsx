"use client";

import BoxThemes from "@/helpers/functions/BoxThemes";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.componenet";
import UserReview, {
  UserReviewProps,
} from "../UserReview/UserReview.component";
import style from "./FuledSocialProofBlock.module.css";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "@/helpers/hooks/useOnScreen";
import wait from "@/helpers/functions/wait";
import Svg from "../../../public/svgs/svgComponent/svg.component";

export interface FuledSocialProofBlockProps {
  beforeHeading: string;
  afterHeading: string;
  subText: string;
  total: number;
  reviews: UserReviewProps[];
  backgroundImage: ImageContainerProps;
}

const FuledSocialProofBlock = ({
  fuledSocialProofBlockConfig,
}: {
  fuledSocialProofBlockConfig: FuledSocialProofBlockProps;
}) => {
  const [number, setNumber] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const setCount = async (total: number, current: number) => {
    if (current <= total) {
      if (current < total * 0.85) {
        setNumber(current);
        await wait(0.001);
        setCount(total, current + 156);
      } else {
        setNumber(current);
        await wait(0.001);
        setCount(total, current + 50);
      }
    }
  };

  useEffect(() => {
    if (isVisible) {
      setCount(fuledSocialProofBlockConfig.total, number);
    }
    if (!isVisible) {
      setNumber(0);
    }
  }, [isVisible]);

  const generateReviews = (reviews: UserReviewProps[]) => {
    const gen = [];
    for (let i = 0; i < reviews.length; i++) {
      gen.push(<UserReview userReviewConfig={reviews[i]} />);
    }
    return gen;
  };

  return (
    <div
      className={style.container}
      style={{ ...BoxThemes("outer", true), backgroundColor: "black" }}
      ref={ref}
    >
      <div className={style.imageContainer}>
        <ImageContainer
          imageContainerConfig={fuledSocialProofBlockConfig.backgroundImage}
        />
      </div>
      <div className={style.heading}>
        <div className={style.mainHeading}>
          <h2>
            {fuledSocialProofBlockConfig.beforeHeading}{" "}
            {number.toLocaleString()} {fuledSocialProofBlockConfig.afterHeading}
          </h2>
          <Svg icon="FireIcon" color="white" size="25px" />
        </div>
        <p>{fuledSocialProofBlockConfig.subText}</p>
      </div>
      <div className={style.reviewSlider}>
        {generateReviews(fuledSocialProofBlockConfig.reviews)}
      </div>
    </div>
  );
};

export default FuledSocialProofBlock;
