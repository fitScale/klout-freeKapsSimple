import BoxThemes from "@/helpers/functions/BoxThemes";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import style from "./UserReview.module.css";
import StarsContainer, {
  StarsContainerProps,
} from "../StarsContainer/StarsContainer.component";
import TextIconCombo, {
  TextIconComboProps,
} from "../TextIconCombo/TextIconCombo.component";

export interface UserReviewProps {
  heading: string;
  text: string;
  stars: number;
  darkTheme: boolean;
  themeColor: string;
  name: string;
}

const UserReview = ({
  userReviewConfig,
}: {
  userReviewConfig: UserReviewProps;
}) => {
  const dark = userReviewConfig.darkTheme;
  const themeTextColor = dark ? "white" : "black";

  const starsConatainerCofig: StarsContainerProps = {
    stars: userReviewConfig.stars,
    color: userReviewConfig.themeColor,
  };

  const textIconConfig: TextIconComboProps = {
    text: `Verifed Buyer | ${userReviewConfig.name}`,
    icon: "verifiedIcon",
    color: themeTextColor,
  };

  return (
    <div className={style.container}>
      <Svg icon="QuoteIcon" size="29" color={themeTextColor} />
      <StarsContainer starsContainerConfig={starsConatainerCofig} />
      <p className={style.heading}>{userReviewConfig.heading}</p>
      <p className={style.text}>{userReviewConfig.text}</p>
      <TextIconCombo textIconComboConfig={textIconConfig} />
    </div>
  );
};

export default UserReview;
