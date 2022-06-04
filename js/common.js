'use strict'

const parallax = document.querySelectorAll(".parallax");
const section = document.querySelectorAll("section");

parallax[0].classList.add('block');

document.addEventListener("scroll", function () {
  for (let i = 0; i < section.length; i++) {
    // section上辺の画面上から距離
    const getElementDistanceTop = section[i].getBoundingClientRect().top;
    // section下辺の画面上から距離
    const getElementDistanceBottom = section[i].getBoundingClientRect().bottom;

    // sectionの上辺が画面下に現れたら、非表示にしていた画像を表示
    if (getElementDistanceTop < window.innerHeight) {
      parallax[i].classList.add('block');
    }
    // sectionの上辺が画面上に消えてから、section下辺が画面上に消えるまで
    if (getElementDistanceTop < 0 && getElementDistanceBottom > 0) {
      parallax[i].classList.add("active");
    } else {  // それ以外はactiveを削除
      parallax[i].classList.remove("active");
    }
  }
});