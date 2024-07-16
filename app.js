let toggle = document.querySelector(".toggle");
let menuMoving = document.querySelector(".menu-small");

let menu1 = document.querySelectorAll(".menu li:not(:last-child) a");
let menu2 = document.querySelectorAll(".menu-small li:not(:last-child) a");

function activation(menu) {
  menu.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      menu.forEach((a) => {
        a.classList.remove("active");
      });
      ele.classList.add("active");
      //   e.preventDefault();
    });
  });
}
activation(menu1);
activation(menu2);

// console.log(menu2);
toggle.onclick = function (e) {
  if (toggle.classList.contains("clicked")) {
    menuMoving.classList.remove("transforming");
    toggle.classList.remove("clicked");
  } else {
    menuMoving.classList.add("transforming");
    toggle.classList.add("clicked");
  }
};
// footer

let span = document.querySelector("footer .logo p span ");

let date = new Date();

span.innerHTML = date.getFullYear();
