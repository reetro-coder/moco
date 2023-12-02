import { useState } from "react";

import { buttonClickAnimation, buttonClickAnimationEnd } from "../Utils";
import { DEVICES } from "../constants";

export default function BetaInfo() {
  const [device, setDevice] = useState(DEVICES[0]);

  function handleRadio(e) {
    setDevice(e.target.value);
  }

  return (
    <section id="beta-info" className="beta-info">
      <h6 className="beta-info__h6">CURRENTLY NOT RECRUITING HUNTERS</h6>
      <h2 className="beta-info__h2">STAY UPDATED</h2>
      <p className="beta-info__p">
        Sign up to get notified when mo.co is available in your country!
      </p>
      <form action="" className="beta-info__form">
        <div className="beta-info__input-wrapper">
          <div className="beta-info__input-inner-wrapper">
            <label htmlFor="beta-info__email" className="beta-info__fader">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="ENTER EMAIL"
              id="beta-info__email"
              className="beta-info__translator"
            />
          </div>
        </div>
        <button
          className="beta-info__input-wrapper"
          onClick={(e) => {
            if (!e.target.matches('input[type="radio"]')) e.preventDefault();
          }}
        >
          <div className="beta-info__input-inner-wrapper">
            <div className="beta-info__fader">YOUR DEVICE IS</div>
            <div className="beta-info__translator nowrap">{device}</div>
          </div>
          <fieldset className="beta-info__devices">
            <label
              htmlFor="device0"
              className="beta-info__device__label nowrap"
            >
              {DEVICES[0]}
              <input
                type="radio"
                id="device0"
                name="device"
                value={DEVICES[0]}
                checked={device === DEVICES[0]}
                onChange={handleRadio}
              />
            </label>

            <div className="hr"></div>

            <label
              htmlFor="device1"
              className="beta-info__device__label nowrap"
            >
              {DEVICES[1]}
              <input
                type="radio"
                id="device1"
                name="device"
                value={DEVICES[1]}
                checked={device === DEVICES[1]}
                onChange={handleRadio}
              />
            </label>

            <div className="hr"></div>

            <label
              htmlFor="device2"
              className="beta-info__device__label nowrap"
            >
              {DEVICES[2]}
              <input
                type="radio"
                id="device2"
                name="device"
                value={DEVICES[2]}
                checked={device === DEVICES[2]}
                onChange={handleRadio}
              />
            </label>
          </fieldset>
        </button>
        <label
          htmlFor="beta-info__checkbox"
          className="beta-info__checkbox-label"
        >
          <input
            type="checkbox"
            id="beta-info__checkbox"
            className="beta-info__checkbox"
          />
          <span>
            I have read and accept the{" "}
            <span className="underline">Privacy Policy</span>
          </span>
        </label>
        <button
          type="submit"
          className="beta-info__submit"
          onClick={() => {
            buttonClickAnimation([".beta-info__submit"]);
          }}
          onAnimationEnd={() => buttonClickAnimationEnd([".beta-info__submit"])}
        >
          SIGN UP
        </button>
      </form>
    </section>
  );
}
