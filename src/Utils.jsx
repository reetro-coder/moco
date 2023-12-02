import $ from "jquery";

function buttonClickAnimation(buttons, fadeChilds = []) {
  for (let button of buttons) {
    $(button).addClass("button-animation");
  }

  for (let child of fadeChilds) {
    $(child).addClass("inactive-fade-animation");
  }
}

function buttonClickAnimationEnd(buttons, fadeChilds = []) {
  for (let button of buttons) {
    $(button).removeClass("button-animation");
  }

  for (let child of fadeChilds) {
    $(child).removeClass("inactive-fade-animation");
  }
}

function fadeCardsAnimation(elements) {
  for (let element of elements) {
    $(element).addClass("fade-cards-animation");
  }
}

function fadeCardsAnimationEnd(element) {
  $(element).removeClass("fade-cards-animation");
}

function mouseHandler(color, elements) {
  for (let element of elements) {
    $(element + ':any-link').css({
      color: color,
    });
  }
}

export {
  buttonClickAnimation,
  buttonClickAnimationEnd,
  fadeCardsAnimation,
  fadeCardsAnimationEnd,
  mouseHandler,
};
