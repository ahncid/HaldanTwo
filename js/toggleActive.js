const toggleButton1 = document.querySelector(".home");
const toggleButton2 = document.querySelector(".song");
const songsContainer = document.querySelector(".songs");
const awayContainer = document.querySelector(".away");
const halfdanImage = document.querySelector(".halfdan-image");

toggleButton2.addEventListener("click", function () {
  songsContainer.classList.add("active");
  awayContainer.classList.add("active");
});

toggleButton1.addEventListener("click", function () {
  songsContainer.classList.remove("active");
  awayContainer.classList.remove("active");

  halfdanImage.style.opacity = "0";
  halfdanImage.style.transition = "opacity 2s";
  setTimeout(() => {
    halfdanImage.style.opacity = "1";
  }, 0);
});
