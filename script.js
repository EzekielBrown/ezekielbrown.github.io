//--------------------------------------------------------------
// Background Noise function
//--------------------------------------------------------------

function generateNoise(canvas, ctx, width, height) {
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 255;

      data[i] = noise; 
      data[i + 1] = noise; 
      data[i + 2] = noise; 
      data[i + 3] = 25;
    }

    ctx.putImageData(imgData, 0, 0);
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const container = document.getElementById("container");
  const textElement = document.getElementById("textElement");

  generateNoise(canvas, ctx, width, height);
  container.style.backgroundImage = `url(${canvas.toDataURL()})`;

  setInterval(() => {
    generateNoise(canvas, ctx, width, height);
    container.style.backgroundImage = `url(${canvas.toDataURL()})`;
  }, 100);


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
    const letters = textElement.querySelectorAll("span");
    for (let i = 0; i < newWord.length; i++) {
      let char = newWord[i] === " " ? "\u00A0" : newWord[i];
      if (letters[i]) {
        letters[i].textContent = char;
      } else {
        const newSpan = document.createElement("span");
        newSpan.textContent = char;
        textElement.appendChild(newSpan);
      }
    }
  
    for (let i = letters.length - 1; i >= newWord.length; i--) {
      letters[i].remove();
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
  
  setTimeout(changeWord, 4000);
  