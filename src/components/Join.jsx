import { useState } from "react";

import {
  buttonClickAnimation,
  buttonClickAnimationEnd,
  fadeCardsAnimation,
  fadeCardsAnimationEnd,
} from "../Utils";
import { PERKS } from "../constants";
import { contains } from "jquery";

export default function Join() {
  function perkHeight() {
    return `${Math.random() + 5}rem`;
  }

  function perkRotation() {
    let min = -5;
    let max = 5;
    return `rotateZ(${Math.floor(min + Math.random() * (max - min + 1))}deg)`;
  }

  function updateState(increment) {
    let updated = perk;
    if (increment) {
      if (perk == 3) updated = 1;
      else updated = perk + 1;
    } else {
      if (perk == 1) updated = 3;
      else updated = perk - 1;
    }
    setPerk(updated);
    fadeCardsAnimation([
      ".join__cards__container__perk1",
      ".join__cards__container__perk2",
      ".join__cards__container__perk3",
      ".join__cards__container__perk4",
    ]);
    const setPerksTimeout = setTimeout(() => {
      // todo
      setPerkBG(PERKS[updated].bg);
      setPerk1(PERKS[updated].values[0]);
      setPerk2(PERKS[updated].values[1]);
      setPerk3(PERKS[updated].values[2]);
      setPerk4(PERKS[updated].values[3]);
    }, 650);
  }

  const [perk, setPerk] = useState(1);
  const [perkBG, setPerkBG] = useState(PERKS[1].bg);
  const [perk1, setPerk1] = useState(PERKS[1].values[0]);
  const [perk2, setPerk2] = useState(PERKS[1].values[1]);
  const [perk3, setPerk3] = useState(PERKS[1].values[2]);
  const [perk4, setPerk4] = useState(PERKS[1].values[3]);

  return (
    <section id="join" className="join">
      <div className="join__perks">
        <div className="join__perks__header">
          <button
            className="join__perks__container__left"
            onClick={() => {
              buttonClickAnimation(
                [
                  ".join__perks__container__left",
                  ".join__perks__container__right",
                ],
                [".join__perks__header__left", ".join__perks__header__right"]
              );
              updateState(false);
            }}
          >
            <div
              className="join__perks__header__left"
              onAnimationEnd={() =>
                buttonClickAnimationEnd(
                  [
                    ".join__perks__container__left",
                    ".join__perks__container__right",
                  ],
                  [".join__perks__header__left", ".join__perks__header__right"]
                )
              }
            ></div>
          </button>
          <div className="join__perks__container__perk center">
            <h3 className="join__perks__header__perk nowrap">
              JOB PERK 0{perk}
            </h3>
          </div>
          <button
            className="join__perks__container__right"
            onClick={() => {
              buttonClickAnimation(
                [
                  ".join__perks__container__left",
                  ".join__perks__container__right",
                ],
                [".join__perks__header__left", ".join__perks__header__right"]
              );
              updateState(true);
            }}
          >
            <div
              className="join__perks__header__right"
              onAnimationEnd={() =>
                buttonClickAnimationEnd(
                  [
                    ".join__perks__container__left",
                    ".join__perks__container__right",
                  ],
                  [".join__perks__header__left", ".join__perks__header__right"]
                )
              }
            ></div>
          </button>
        </div>
        <div className="join__cards">
          <div
            className="join__cards__container__perk1 center"
            style={{
              backgroundColor: perkBG,
              height: perkHeight(),
              transform: perkRotation(),
            }}
            onAnimationEnd={() => {
              fadeCardsAnimationEnd(".join__cards__container__perk1");
            }}
          >
            <h3 className="join__cards__perk1 nowrap">{perk1}</h3>
          </div>
          <div
            className="join__cards__container__perk2 center"
            style={{
              backgroundColor: perkBG,
              height: perkHeight(),
              transform: perkRotation(),
            }}
            onAnimationEnd={() => {
              fadeCardsAnimationEnd(".join__cards__container__perk2");
            }}
          >
            <h3 className="join__cards__perk2 nowrap">{perk2}</h3>
          </div>
          <div
            className="join__cards__container__perk3 center"
            style={{
              backgroundColor: perkBG,
              height: perkHeight(),
              transform: perkRotation(),
            }}
            onAnimationEnd={() => {
              fadeCardsAnimationEnd(".join__cards__container__perk3");
            }}
          >
            <h3 className="join__cards__perk3 nowrap">{perk3}</h3>
          </div>
          <div
            className="join__cards__container__perk4 center"
            style={{
              backgroundColor: perkBG,
              height: perkHeight(),
              transform: perkRotation(),
            }}
            onAnimationEnd={() => {
              fadeCardsAnimationEnd(".join__cards__container__perk4");
            }}
          >
            <h3 className="join__cards__perk4 nowrap">{perk4}</h3>
          </div>
        </div>
      </div>

      <div className="join__why">
        <h2 className="nowrap">WHY JOIN US?</h2>
        <p className="join__why__p">
          We’re mo.co, a small monster-hunting startup that got into a little
          bit of a mess with monsters. We’re a solid team, but quickly realized,
          we need a lot of help. So join us, and take a leap into the unknown.
          Except, this unknown is full of monsters, dungeons... and things that
          can slay you almost instantly, but in a fun way! 😬
        </p>
        <button className="nowrap">SIGN UP</button>
      </div>
    </section>
  );
}
