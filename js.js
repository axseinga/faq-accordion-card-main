const btns = Array.from(document.querySelectorAll(".btn"));
const texts = document.querySelectorAll(".text");
const ques = document.querySelectorAll(".card__text__box__li__que--h");
const arrows = document.querySelectorAll(".arrow");

btns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    texts[i].classList.toggle("hidden");
    ques[i].classList.toggle("bold");
    arrows[i].classList.toggle("rotate");
  });
});

/*for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    texts[i].classList.toggle("hidden");
    ques[i].classList.toggle("bold");
    arrows[i].classList.toggle("rotate");
  });
}
*/

/*
btn[0].addEventListener("click", function () {
  text[0].classList.toggle("hidden");
  que[0].classList.toggle("bold");
  arrow[0].classList.toggle("rotate");
});

btn[1].addEventListener("click", function () {
  text[1].classList.toggle("hidden");
  que[1].classList.toggle("bold");
  arrow[1].classList.toggle("rotate");
});

btn[2].addEventListener("click", function () {
  text[2].classList.toggle("hidden");
  que[2].classList.toggle("bold");
  arrow[2].classList.toggle("rotate");
});

btn[3].addEventListener("click", function () {
  text[3].classList.toggle("hidden");
  que[3].classList.toggle("bold");
  arrow[3].classList.toggle("rotate");
});

btn[4].addEventListener("click", function () {
  text[4].classList.toggle("hidden");
  que[4].classList.toggle("bold");
  arrow[4].classList.toggle("rotate");
});

btn[5].addEventListener("click", function () {
  text[5].classList.toggle("hidden");
  que[5].classList.toggle("bold");
  arrow[5].classList.toggle("rotate");
});
*/
