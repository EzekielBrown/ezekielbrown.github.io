//--------------------------------------------------------------
// Background Noise function
//--------------------------------------------------------------

document.addEventListener("DOMContentLoaded", (event) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const container = document.getElementById("container");
  
  container.style.backgroundSize = `${width}px ${height}px`;

  const smallCanvas = document.createElement("canvas");
  const smallCtx = smallCanvas.getContext("2d");
  smallCanvas.width = width / 1;
  smallCanvas.height = height / 1;

  function generateNoise() {
    const imgData = smallCtx.createImageData(smallCanvas.width, smallCanvas.height);
    const data = new Uint8ClampedArray(smallCanvas.width * smallCanvas.height * 4);

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 255;
      data[i] = noise;
      data[i + 1] = noise;
      data[i + 2] = noise;
      data[i + 3] = 25;
    }

    imgData.data.set(data);
    smallCtx.putImageData(imgData, 0, 0);

    return smallCanvas.toDataURL();
  }

  const patterns = Array.from({ length: 5 }, generateNoise);
  let currentIndex = 0;

  function updateNoise() {
    container.style.backgroundImage = `url(${patterns[currentIndex]})`;

    currentIndex = (currentIndex + 1) % patterns.length;

    requestAnimationFrame(updateNoise);
  }

  updateNoise();
});



//--------------------------------------------------------------
// Random word function
//--------------------------------------------------------------

const words = [
  "Coder.",
  "Designer.",
  "Thinker.",
  "Web Developer.",
  "Leader.",
  "Python.",
  "Maori.",
  "Student.",
  "Footballer.",
  "Tinkerer.",
];

const DEFAULT_WORD = "Ezekiel";

function fadeOutLetters() {
  const letters = textElement.querySelectorAll("span");
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.add("faded");
    }, index * 150);
  });
}

function fadeInLetters() {
  const letters = textElement.querySelectorAll("span");
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.remove("faded");
    }, index * 150);
  });
}

let currentWord = DEFAULT_WORD;

function setWord(newWord) {
  textElement.innerHTML = "";

  for (let i = 0; i < newWord.length; i++) {
    let char = newWord[i] === " " ? "\u00A0" : newWord[i];
    const newSpan = document.createElement("span");
    newSpan.textContent = char;
    newSpan.classList.add("faded");
    textElement.appendChild(newSpan);
  }
}

function changeWord() {
  fadeOutLetters();

  setTimeout(() => {
    let randomWord;
    do {
      randomWord = words[Math.floor(Math.random() * words.length)];
    } while (randomWord === currentWord);

    currentWord = randomWord;
    setWord(randomWord);

    setTimeout(fadeInLetters, 500);

    setTimeout(() => {
      fadeOutLetters();
      setTimeout(() => {
        setWord(DEFAULT_WORD);
        currentWord = DEFAULT_WORD;
        setTimeout(fadeInLetters, 500);
        setTimeout(changeWord, 4000);
      }, 2000);
    }, 4000);
  }, 2000);
}

setWord(DEFAULT_WORD);
fadeInLetters();
setTimeout(changeWord, 4000);
