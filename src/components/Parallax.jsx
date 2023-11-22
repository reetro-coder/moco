import Header from "./Header";
import Hero from "./Hero";

import { DIMS } from "../constants";
import BG from "../assets/bg.jpg";
import DUST from "../assets/dust.png";
import FOREGROUND_BACK from "../assets/foreground-back.png";
import FOREGROUND_FRONT from "../assets/foreground-front.png";
import JAX from "../assets/jax.png";
import LUNA from "../assets/luna.png";
import MANNY from "../assets/manny.png";
import RAYS from "../assets/rays.png";

export default function Parallax() {
  return (
    <div className="parallax">
      <img src={BG} alt="bg" width={DIMS.BG_WIDTH} height={DIMS.BG_HEIGHT} className="parallax__bg" />
      <img src={DUST} alt="dust" width={DIMS.DUST_WIDTH} height={DIMS.DUST_HEIGHT} className="parallax__dust" />
      <img src={RAYS} alt="rays" width={DIMS.RAYS_WIDTH} height={DIMS.RAYS_HEIGHT} className="parallax__rays" />
      <img src={LUNA} alt="luna" width={DIMS.LUNA_WIDTH} height={DIMS.LUNA_HEIGHT} className="parallax__luna" />
      <img src={MANNY} alt="manny" width={DIMS.MANNY_WIDTH} height={DIMS.MANNY_HEIGHT} className="parallax__manny" />
      <img src={JAX} alt="jax" width={DIMS.JAX_WIDTH} height={DIMS.JAX_HEIGHT} className="parallax__jax" />
      <div className="parallax__filter"></div>
      <Header />
      <Hero />
      <img src={FOREGROUND_BACK} alt="foreground_back" width={DIMS.FOREGROUND_BACK_WIDTH} height={DIMS.FOREGROUND_BACK_HEIGHT} className="parallax__fb" />
      <img src={FOREGROUND_FRONT} alt="foreground_front" width={DIMS.FOREGROUND_FRONT_WIDTH} height={DIMS.FOREGROUND_FRONT_HEIGHT} className="parallax__ff" />
    </div>
  );
}
