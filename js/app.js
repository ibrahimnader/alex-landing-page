let galleryBtns = document.querySelectorAll(".gallery-buttons li button");
let galleryItems = document.querySelectorAll(".gallery-item");
galleryBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    galleryItems.forEach(function (item) {
      item.classList.remove("hidden");
      if (btn.dataset.filter == "all") {
        item.classList.remove("hidden");
      } else if (item.dataset.item != btn.dataset.filter) {
        item.classList.add("hidden");
      }
    });
  })
);
