import CommaIcon from "../../../assets/icons/reviews/CommaIcon";

const Commas = () => {
  return (
    <div
      className="commas"
      style={{
        position: 'absolute',
        top: 30,
        right: 30,
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
