const poemLines = [
  "(i thought the world would stop at 13 ",
  "but hands spun; traveled. it was 16 instead.",
  "beginnings sometimes look like ends",
  "but i looked again, aged again)",
  "",
  "today i saw the shell of an egg on the sidewalk",
  "baby blue and broken. dry.",
  "the other day i saw a baby bird, eyes closed,",
  "wings frozen, wet with morning dew—",
  "it’d left the nest a little too soon. i wonder if",
  "its mother knew that ",
  "it would be too windy, too early",
  "too late. the nights",
  "these days are ",
  "getting colder. i knelt down and ",
  "cradled it close, closer: spread ",
  "its wings before covering it with earth", 
  "the practiced motion of kneeling in",
  "dirt and hiding and crying over",
  "a tiny little dead thing",
  "somehow giving me deja vu."
];

const replacementText = "beginnings sometimes look like ends";
const poemContainer = document.getElementById("poem");

function typeLine(line, index, callback) {
  let span = document.createElement("span");
  span.classList.add("line");
  poemContainer.appendChild(span);

  let charIndex = 0;
  function typeCharacter() {
      if (charIndex < line.length) {
          span.textContent += line.charAt(charIndex);
          charIndex++;
          setTimeout(typeCharacter, 45);
      } else {
          span.style.opacity = 1;
          if (callback) callback();
      }
  }
  typeCharacter();
}

function typePoem(lines, index = 0) {
  if (index < lines.length) {
      typeLine(lines[index], index, () => {
          poemContainer.appendChild(document.createElement("br"));
          setTimeout(() => typePoem(lines, index + 1), 350);
      });
  } else {
      setTimeout(() => replaceLines(), 1500);
  }
}

function replaceLines(index = 0) {
  const lines = document.querySelectorAll(".line");
  if (index < lines.length) {
      lines[index].textContent = replacementText;
      setTimeout(() => replaceLines(index + 1), 500);
  }
}

typePoem(poemLines);
