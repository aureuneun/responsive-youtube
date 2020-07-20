const moreBtn = document.querySelector(".titleAndBtn .moreBtn");
const title = document.querySelector(".titleAndBtn .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
