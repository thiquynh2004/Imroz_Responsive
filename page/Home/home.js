const menu = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".nav-menu");
const body = document.querySelector("body");

const showMenuToggle = () => {
  menu.classList.toggle("close-menu");
  menuLinks.classList.toggle("opened");
  body.classList.toggle("opened");
};
menu.addEventListener("click", showMenuToggle);

const setActive = (event) =>{
  console.log("e", event);
  document.querySelectorAll("#navMenu a.active").forEach(function (item) {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
};
