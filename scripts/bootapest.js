let currentImage = 1;
const totalImages = 7;
const maskedContentElement = document.querySelector(".masked-content");
const imageElement = document.getElementById("cycleImage");
let increasing = true;

function updateImage() {
  if (increasing) {
    currentImage++;
    if (currentImage === totalImages) {
      increasing = false;
    }
  } else {
    currentImage--;
    if (currentImage === 1) {
      increasing = true;
    }
  }
  maskedContentElement.style.maskImage = `url('assets/bootapest/${currentImage}.svg')`;
  imageElement.src = `assets/bootapest/${currentImage}.svg`;
}

setInterval(updateImage, 500);