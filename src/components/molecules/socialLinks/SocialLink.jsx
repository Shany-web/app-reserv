import { Icon } from "../../atoms/icons/Icon";
import "./SocialLink.css";

export const SocialLinks = ({ links = [] }) => {
  return (
    <div className="social-links">
      {links.map(({ name, url, label }) => (
        <a
          key={name}
          href={url}
          className="social-links__item"
          aria-label={label}
          //Hace que el enlace se abra en una pestaña nueva.
          target="_blank"
          //noopener:evita que la página que se abre pueda controlar o manipular tu página original.
          //noreferrer:evita que se le envíe a la otra página la dirección desde la que llegó el visitante
          rel="noopener noreferrer"
        >
          <Icon name={name} size={18} decorative />
        </a>
      ))}
    </div>
  );
};
