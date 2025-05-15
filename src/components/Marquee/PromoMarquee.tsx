import Marquee from "react-fast-marquee";

const PromoMarquee = () => {
  return (
    <Marquee
      style={{
        marginTop: 64,
        position: "relative",
        left: "-140px",
        width: "calc(100% + 280px)",
        height: 46,
        backgroundColor: "#C48D53",
        color: "#171717",
        display: "flex",
        alignItems: "center",
        gap: 40,
        fontSize: 14,
        fontWeight: 500,
      }}
      gradient={false}
      speed={50}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginRight: 20,
        }}
      >
        <div
          style={{
            height: 8,
            width: 8,
            backgroundColor: "#181818",
            marginRight: 10,
          }}
        />
        Trading
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          marginRight: 20,
        }}
      ></div>
    </Marquee>
  );
};

export default PromoMarquee;
