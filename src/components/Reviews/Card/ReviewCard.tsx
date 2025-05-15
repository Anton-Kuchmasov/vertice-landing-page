import StarIcon from "../../../assets/icons/reviews/StarIcon";
import Commas from "../Commas/Commas";
import "./ReviewCard.scss";

export type ReviewCardType = {
  text: string;
  name: string;
  avatar: string;
};

type ReviewCardProps = ReviewCardType;

const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  name,
  avatar,
}: ReviewCardProps) => {
  return (
    <article className="review-card">
      <div className="review-card__text">{text}</div>
      <div className="review-card__bottom">
        <div className="review-card__user-info">
            <img src={avatar} alt="User Photo" className="review-card__user-photo" />
            <span className="review-card__user-name">{name}</span>
            
        </div>
        <div className="review-card__star-block">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
      </div>
      <Commas />
    </article>
  );
};

export default ReviewCard;
