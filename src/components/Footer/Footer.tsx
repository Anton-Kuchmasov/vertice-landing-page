import TelegramFooterIcon from "../../assets/icons/footer/TelegramFooterIcon";
import YouTubeFooterIcon from "../../assets/icons/footer/YouTubeFooterIcon";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copyright">
        © 2025 VÉRTICE. All right reserved
      </div>
      <div className="footer__icons">
        <a className="footer__icons--link" href="#">
          <TelegramFooterIcon />
        </a>
        <a className="footer__icons--link" href="#">
          <YouTubeFooterIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
