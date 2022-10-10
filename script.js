const dropDownBtnList = document.querySelectorAll(".drop-down-btn");
const hamburger = document.querySelector(".hamburger");

dropDownBtnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const info = e.path.find((item) => {
      return item.classList.contains("nav-item-list-container");
    });
    const visibility = info.getAttribute("data-visible");
    // imgSrc = info.children[0].children[1];
    imgSrc = info.querySelector(".drop-down-arrow");

    if (visibility == "false") {
      info.setAttribute("data-visible", true);
      imgSrc.setAttribute("src", "./images/icon-arrow-up.svg");
    } else if (visibility == "true") {
      info.setAttribute("data-visible", false);
      imgSrc.setAttribute("src", "./images/icon-arrow-down.svg");
    }
  });
});

hamburger.addEventListener("click", (e) => {
  // hamburger.closest("nav").setAttribute("data-visible", true);
  console.log(hamburger.closest("nav").classList.toggle("hide-mobile-nav"));
  //   hamburger.closest("nav").classList[0].toggle("true");
});
