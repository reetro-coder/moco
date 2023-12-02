import { DIMS } from "../constants";
import HUNTER1 from "../assets/hunter-1.png";
import HUNTER2 from "../assets/hunter-2.png";
import HUNTER3 from "../assets/hunter-3.png";

export default function Founders() {
  return (
    <section id="founders" className="founders">
      <div className="founders__header">
        <h6 className="founders__h6">MEET THE TEAM</h6>
        <h2 className="founders__h2">THE FOUNDERS</h2>
      </div>
      <div className="founders__cards-container">
        <div className="founders__card">
          <figure className="founders__figure">
            <img
              src={HUNTER1}
              alt="hunter-1"
              width={DIMS.HUNTER_1_WIDTH}
              height={DIMS.HUNTER_1_HEIGHT}
            ></img>
            <figcaption className="offscreen"></figcaption>
          </figure>
          <div className="founders__card__text">
            <h6 className="founders__h6 nowrap">HEAD HUNTER</h6>
            <h2 className="founders__h2">LUNA</h2>
            <p className="founders__p">
              Leading adventures, one<br></br>monster at a time
            </p>
          </div>
        </div>
        <div className="founders__card">
          <figure className="founders__figure">
            <img
              src={HUNTER2}
              alt="hunter-2"
              width={DIMS.HUNTER_2_WIDTH}
              height={DIMS.HUNTER_2_HEIGHT}
            ></img>
            <figcaption className="offscreen"></figcaption>
          </figure>
          <div className="founders__card__text">
            <h6 className="founders__h6 nowrap">TECH GUY</h6>
            <h2 className="founders__h2">MANNY</h2>
            <p className="founders__p">
              Engineering the future of<br></br>monster-hunting
            </p>
          </div>
        </div>
        <div className="founders__card">
          <figure className="founders__figure">
            <img
              src={HUNTER3}
              alt="hunter-3"
              width={DIMS.HUNTER_3_WIDTH}
              height={DIMS.HUNTER_3_HEIGHT}
            ></img>
            <figcaption className="offscreen"></figcaption>
          </figure>
          <div className="founders__card__text">
            <h6 className="founders__h6 nowrap">CHIEF COMBAT OFFICER</h6>
            <h2 className="founders__h2">JAX</h2>
            <p className="founders__p">
              Turning brawn and strategy<br></br>into success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
