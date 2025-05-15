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
  return <article className="review-card">ReviewCard</article>;
};

export default ReviewCard;
