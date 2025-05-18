import GreenTickIcon from "../../../assets/icons/activities/GreenTickIcon";
import "./TabContent.scss";

export type TabContentBenefit = {
  title: string;
  benefit: string;
};

export type TabContentType = {
  value: string;
  accentText?: string;
  title: string;
  benefits: TabContentBenefit[];
  mediaContent?: string;
  objectFit?: 'cover' | 'contain'
};

type TabContentProps = {
  content: TabContentType | undefined;
};

const TabContent: React.FC<TabContentProps> = ({
  content,
}: TabContentProps) => {
  if (!content) return null;

  const { title, accentText, benefits, mediaContent, objectFit } = content;

  return (
    <div className="tab-content">
      <div className="tab-content__left">
        <h3 className="tab-content__title">
          {accentText && (
            <span className="tab-content__title--accent">{accentText} </span>
          )}
          {title}
        </h3>
        <ul className="tab-content__list">
          {benefits.map((benefit) => (
            <li className="tab-content__item">
              <div>
                <GreenTickIcon />
              </div>
              <div className="tab-content__item--content benefit">
                <h4 className="benefit__header">{benefit.title}</h4>
                <p className="benefit__text inter">{benefit.benefit}</p>
              </div>
            </li>
          ))}
        </ul>
        <a
          href="https://t.me/+jUzjIJ6qoos1MDhi"
          target="_blank"
          className="tab-content__link"
        >
          Comenzar a operar
        </a>
      </div>
      <div className="tab-content__right">
      <div className="tab-content__media" style={{background: mediaContent ? 'transparent': ''}}>
        {mediaContent && <img className="tab-content__media--content" src={mediaContent} style={{objectFit}}/>}
        </div> 
      </div>
    </div>
  );
};

export default TabContent;
