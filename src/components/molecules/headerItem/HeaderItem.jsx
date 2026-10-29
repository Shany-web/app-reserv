import { Icon } from "../../atoms/icons/Icon";
import { Title } from "../../atoms/Title";
import "./HeaderItem.css";

export const HeaderItem = ({
  iconName = "",
  text = "",
  variant = "primary",
}) => {
  return (
    <div className={`header-item item-${variant} ${variant}`}>
      <Icon name={iconName} decorative className="header-item-icon" />
      <Title>{text}</Title>
    </div>
  );
};
