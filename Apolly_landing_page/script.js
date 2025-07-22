//slides
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".interface__slider-slide");
  const leftBtn = document.querySelector(".interface__slider-arrow--left");
  const rightBtn = document.querySelector(".interface__slider-arrow--right");
  const dotsContainer = document.querySelector(".interface__slider-dots");
  let current = 1;

  function createDots() {
    dotsContainer.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className =
        "interface__slider-dot" + (i === current ? " active" : "");
      dot.addEventListener("click", () => {
        current = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    slides.forEach((slide, i) => {
      slide.className = "interface__slider-slide";

      if (i === current) slide.classList.add("active");
      else if (i === (current - 1 + slides.length) % slides.length)
        slide.classList.add("left");
      else if (i === (current + 1) % slides.length)
        slide.classList.add("right");
      else if (i === (current - 2 + slides.length) % slides.length)
        slide.classList.add("far-left");
      else if (i === (current + 2) % slides.length)
        slide.classList.add("far-right");
    });

    Array.from(dotsContainer.children).forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  leftBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlider();
  });
  rightBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlider();
  });

  createDots();
  updateSlider();
});

//slides2

document.addEventListener("DOMContentLoaded", function () {
  const slides1 = document.querySelectorAll(".customers__founders-founder");

  const dotsContainer1 = document.querySelector(".customers__dots");
  let current1 = 1;

  function createDots1() {
    dotsContainer1.innerHTML = "";
    slides1.forEach((_, i) => {
      const dot1 = document.createElement("span");
      dot1.className = "customers__dot" + (i === current1 ? " active" : "");
      dot1.addEventListener("click", () => {
        current1 = i;
        updateSlider1();
      });
      dotsContainer1.appendChild(dot1);
    });
  }

  function updateSlider1() {
    slides1.forEach((slide1, i) => {
      slide1.className = "customers__founders-founder";

      if (i === current1) slide1.classList.add("active");
      else if (i === (current1 - 1 + slides1.length) % slides1.length)
        slide1.classList.add("left");
      else if (i === (current1 + 1) % slides1.length)
        slide1.classList.add("right");
    });

    Array.from(dotsContainer1.children).forEach((dot1, i) => {
      dot1.classList.toggle("active", i === current1);
    });
  }
  createDots1();
  updateSlider1();
});
const header = document.querySelector(".home__header");
const topStart = 65;
const topFixed = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 65) {
    header.style.top = topFixed + "px";
  } else {
    header.style.top = topStart + "px";
  }
});
//burger
const burger = document.querySelector(".home__burger");
const burgerBackGround = document.querySelector(".home__burger-bg");
const buttons = document.querySelectorAll(".home__button ");
const leftButtons = document.querySelector(".home__buttons-left");
burger.addEventListener("click", () => {
  leftButtons.classList.toggle("active");
  burger.classList.toggle("active");
  burgerBackGround.classList.toggle("active");
  buttons.forEach((button, idx) => {
    if (idx !== buttons.length - 1) {
      button.classList.toggle("active");
    }
  });
});
