function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The fairy child's dream.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
