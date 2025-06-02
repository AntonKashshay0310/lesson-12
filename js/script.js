const listEl = document.querySelector(".list")
const linkEl = document.querySelectorAll(".list__item__link")
// console.log(listEl);
// console.log(linkEl);

// document.body.style.backgroundColor = 'black';
listEl.style.color = 'red';
// linkEl.style.color = 'white';


linkEl.forEach((link) => link.style.color = 'white')


const btn = document.querySelector(".btn")

btn.addEventListener("click", onBtnClick)

function onBtnClick () {
  btn.insertAdjacentHTML("afterend", "<p>Привіт усім!</p>")
}