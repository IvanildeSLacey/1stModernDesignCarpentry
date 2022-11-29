// Main Page carousel slide script 
const carouselSlide = document.querySelectorAll(".img-container img");

const timeDelay = 4000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// carouselSlide[currentImageCounter].style.display = "block";
carouselSlide[currentImageCounter].style.opacity = 1;

setInterval(nextImage, timeDelay);

function nextImage() {
  // carouselSlide[currentImageCounter].style.display = "none";
  carouselSlide[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % carouselSlide.length;

  // carouselSlide[currentImageCounter].style.display = "block";
  carouselSlide[currentImageCounter].style.opacity = 1;
}


// const burger = document.querySelector(".burger");
// const navMenu = document.querySelector(".nav-menu");

// burger = addEventListener("click", () => {
//     burger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     burger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))
