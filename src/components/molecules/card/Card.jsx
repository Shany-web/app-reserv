import { Title } from "../../atoms/Title";
import { Icon } from "../../atoms/icons/Icon";
import "./Card.css";

export const Card = ({
  image,
  iconName = "",
  learnMoreIcon,
  title = "",
  description = "",
  link = "#",
}) => {
  return (
    <article className="service-card ">
      <img className="service-card__image" src={image} alt="" />

      <div className="service-card__icon">
        <Icon name={iconName} size={22} decorative />
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <Title size="sm">{description}</Title>
        <a className="service-card__link" href={link}>
          LEARN MORE <Icon name={learnMoreIcon} size={12} decorative />
        </a>
      </div>
    </article>
  );
};
