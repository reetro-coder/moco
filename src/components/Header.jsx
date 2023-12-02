import { DIMS } from "../constants";
import LOGO from "../assets/logo.png";
import $ from "jquery";
export default function Header() {
  return (
    <header className="header">
      <figure className="header__logo">
        <img
          src={LOGO}
          alt="logo"
          width={DIMS.LOGO_WIDTH}
          height={DIMS.LOGO_HEIGHT}
        ></img>
        <figcaption className="offscreen"></figcaption>
      </figure>
      <div className="header__wrapper">
        <a href="#join" className="header__a nowrap">
          WHY JOIN US
        </a>
      </div>
      <div className="header__wrapper">
        <a href="#founders" className="header__a nowrap">
          THE FOUNDERS
        </a>
      </div>
      <div className="header__wrapper">
        <a href="#beta-info" className="header__a nowrap">
          BETA INFO
        </a>
      </div>
    </header>
  );
}
