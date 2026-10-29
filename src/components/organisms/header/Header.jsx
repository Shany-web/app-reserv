import { HeaderItem } from "../../molecules/headerItem/HeaderItem";
import { SocialLinks } from "../../molecules/socialLinks/SocialLink";

import "./Header.css";

const redes = [
  { name: "instagram", url: "https://instagram.com", label: "Instagram" },
  { name: "facebook", url: "https://facebook.com", label: "Facebook" },
  { name: "tiktok", url: "https://tiktok.com", label: "TikTok" },
];

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container container">
        <div className="icon-text">
          <div className="icon-location">
            <HeaderItem
              iconName="location"
              text="Proudly Serving Clients Across the USA"
            />
            <HeaderItem iconName="heart" text="Clean. Safe. Beautiful." />
          </div>
        </div>
        <ul>
          <SocialLinks links={redes} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
