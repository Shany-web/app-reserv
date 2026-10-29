import { CiLocationOn, CiHeart } from "react-icons/ci";
import { FaBottleDroplet } from "react-icons/fa6";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaArrowRight,
  FaHandSparkles,
  FaStar,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineWorkspacePremium, MdWorkspacePremium } from "react-icons/md";
import { GiFootprint } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { LuWandSparkles, LuBadgeCheck, LuShieldCheck } from "react-icons/lu";
import { GiEyelashes, GiLotusFlower } from "react-icons/gi";
import { RiDoubleQuotesL } from "react-icons/ri";

const icons = {
  location: CiLocationOn,
  heart: CiHeart,
  instagram: FaInstagram,
  facebook: FaFacebook,
  tiktok: FaTiktok,
  sanitized: LuShieldCheck,
  premium: MdOutlineWorkspacePremium,
  arrow: FaArrowRight,
  manicure: FaBottleDroplet,
  pedicure: GiFootprint,
  gelPolish: IoDiamondOutline,
  art: LuWandSparkles,
  acrilic: FaHandSparkles,
  lash: GiEyelashes,
  lotus: GiLotusFlower,
  premiumProduct: MdWorkspacePremium,
  experience: LuBadgeCheck,
  star: FaStar,
  quote: RiDoubleQuotesL,
  phone: FaPhoneAlt,
};

export const Icon = ({
  name,
  size = 19,
  decorative = false,
  label,
  className = "",
}) => {
  const Component = icons[name];

  if (!Component) return null;

  return (
    <Component
      size={size}
      className={className}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={!decorative ? label : undefined}
      role={!decorative ? "img" : undefined}
    />
  );
};
