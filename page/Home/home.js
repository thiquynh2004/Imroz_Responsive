const menu = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".nav-menu");
const body = document.querySelector("body");

const showMenuToggle = () => {
  menu.classList.toggle("close-menu");
  menuLinks.classList.toggle("opened");
  body.classList.toggle("opened");
};
menu.addEventListener("click", showMenuToggle);

const setActive = (event) => {
  console.log("e", event);
  document.querySelectorAll("#navMenu a.active").forEach(function (item) {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
};
//back to top:
let calcScroll = () => {
  let scrollProgress = document.getElementById("progress");
  let scrollProgressIcon = document.getElementById("progress-icon");
  let pos = document.documentElement.scrollTop;
  // console.log("pos", pos);

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // console.log("calcHeight", calcHeight);

  let scrollIcon = Math.round((pos * 100) / calcHeight);
  // console.log("scrollIcon", scrollIcon);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient( #fd4766 ${scrollIcon}%, #1d1d24 ${scrollIcon}%)`;
};

window.onscroll = calcScroll;
window.onload = calcScroll;
