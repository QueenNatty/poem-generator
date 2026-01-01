// Minimal JS: create a visible typewriter on #poem and re-run on form submit.
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Typewriter !== "undefined") {
    new Typewriter("#poem", {
      strings: "The fairy child's dream.",
      autoStart: true,
      delay: 50,
      cursor: "|",
    });
  } else {
    console.warn("Typewriter library not found.");
  }

  const form = document.querySelector("#poem-generator-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (typeof Typewriter !== "undefined") {
        new Typewriter("#poem", {
          strings: "The fairy child's dream.",
          autoStart: true,
          delay: 50,
          cursor: "|",
        });
      }
    });
  }
});
