import UserReview, {
  UserReviewProps,
} from "../UserReview/UserReview.component";
import style from "./UserReviewSlider.module.css";

export interface UserReviewSliderProps {
  reviews: UserReviewProps[];
  hide?: boolean;
}

const UserReviewSlider = ({
  userReviewSliderConfig,
}: {
  userReviewSliderConfig: UserReviewSliderProps;
}) => {
  const generateReviews = (reviews: UserReviewProps[]) => {
    const gen = [];
    for (let i = 0; i < reviews.length; i++) {
      gen.push(<UserReview userReviewConfig={reviews[i]} />);
    }
    return gen;
  };

  return (
    <div
      className={style.outerContainer}
      style={{ display: userReviewSliderConfig.hide ? "none" : "unset" }}
    >
      <div className={style.container}>
        {generateReviews(userReviewSliderConfig.reviews)}
      </div>
    </div>
  );
};

export default UserReviewSlider;
