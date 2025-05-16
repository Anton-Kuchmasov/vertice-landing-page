import CommaIcon from "../../../assets/icons/reviews/CommaIcon";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";

const Commas = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className="commas"
      style={{
        position: "absolute",
        top: isMobile ? 20 : 30,
        right: isMobile ? 20 :30,
        display: "flex",
        gap: "6px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CommaIcon />
      <CommaIcon />
    </div>
  );
};

export default Commas;
