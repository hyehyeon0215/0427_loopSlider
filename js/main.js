const ul = document.querySelector("ul");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const lis = ul.querySelectorAll("li");
let len = lis.length; //추가가되도 자동 li의 갯수를 세어줌
let enableClick = true;



init();
next.addEventListener("click", (e) => {
  e.preventDefault();
  if (enableClick) {
    nextSlide();
    enableClick = false;
  }
})
prev.addEventListener("click", (e) => {
  e.preventDefault();
  if (enableClick) {
    prevSlide();
    enableClick = false;
  }
})



function prevSlide() {
  new Anim(ul, {
    prop: 'left',
    value: "0%",
    duration: 1000,
    callback: () => {
      ul.style.left = "-100%"; //0%에서 초기 위치 값으로 복귀하는 코드
      ul.prepend(ul.lastElementChild);//마지막 li를 맨앞으로 보내는 코드
    }
  })
}

function nextSlide() {
  new Anim(ul, {
    prop: 'left',
    value: "-200%",
    duration: 1000,
    callback: () => {

      ul.append(ul.firstElementChild);
      ul.style.left = "-100%";
      enableClick = true;
    }
  })
}

function init() {
  ul.style.left = "-100%";
  ul.prepend(ul.lastElementChild);
  ul.style.width = `${100 * len}%`;
  lis.forEach((el) => { el.style.width = `${100 / len}%`; })
}