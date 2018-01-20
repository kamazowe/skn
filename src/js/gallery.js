(function() {
  function galleryItemEnter(e) {
    e.stopPropagation();
    this.style.opacity = 1;
  }
  function galleryItemLeave(e) {
    this.style.opacity = 0.85;
  }
  let list = document.querySelector(".firms__list").children;
  for (item in list) {
    list[item].addEventListener("mouseenter", galleryItemEnter, false);
    list[item].addEventListener("mouseleave", galleryItemLeave, false);
  }
})();
