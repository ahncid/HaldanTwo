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

  // Gradually fade in the image when "home" is clicked
  halfdanImage.style.opacity = "0"; // Start with opacity 0
  halfdanImage.style.transition = "opacity 2s"; // Adjust duration as needed
  setTimeout(() => {
    halfdanImage.style.opacity = "1"; // End with opacity 1
  }, 0); // Delay the opacity change to ensure the transition effect
});
