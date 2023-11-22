import { buttonClickAnimation, buttonClickAnimationEnd } from "../Utils";

export default function Hero() {
  return (
    <div className="hero">
      <h6 className="hero__h6 nowrap">GEAR UP!</h6>
      <h1 className="hero__h1">WE'RE GOING MONSTER HUNTING!</h1>
      <button
        className="hero__button nowrap"
        onClick={() => {
          buttonClickAnimation([".hero__button"]);
        }}
        onAnimationEnd={() => buttonClickAnimationEnd([".hero__button"])}
      >
        SIGN UP FOR BETA
      </button>
    </div>
  );
}
