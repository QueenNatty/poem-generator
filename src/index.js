function displayPoem(response) {
  const poemText = response.data.answer;

  const poemElement = document.querySelector("#poem");
  if (poemElement) {
    poemElement.innerHTML = "";
    poemElement.classList.remove("hidden");
  }

  createTypewriter("#poem", poemText);
}

function generatePoem(event) {
  event.preventDefault();

  const input = document.querySelector(".instructions");
  const topic = input ? input.value.trim() : "";

  if (!topic) {
    alert("Please enter a poem topic");
    return;
  }

  const poemElement = document.querySelector("#poem");
  if (poemElement) {
    poemElement.classList.remove("hidden");
    poemElement.innerHTML =
      "<div class='generating'>⏳ Generating your poem...✨</div>";
  }

  const apiKEY = "433a60610691c65a16b446fo40atef84";
  const prompt = `Write a poem about ${topic}.`;
  const context = "A whimsical and enchanting theme suitable for children.";

  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKEY}`;

  axios
    .get(apiURL)
    .then(displayPoem)
    .catch(function (error) {
      console.error("API Error:", error);
      if (poemElement) {
        poemElement.innerHTML =
          "<div class='error'>❌ Sorry, failed to generate poem. Please try again.</div>";
      }
    });
}

function createTypewriter(targetSelector, text) {
  if (typeof Typewriter === "undefined") {
    console.warn("Typewriter library not found.");
    return null;
  }

  return new Typewriter(targetSelector, {
    strings: text || "",
    autoStart: true,
    delay: 50,
    cursor: "|",
  });
}

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
  

  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  
  themeToggle.addEventListener("click", function () {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize theme toggle
  initThemeToggle();
  

  const form = document.querySelector("#poem-generator-form");
  if (form) {
    form.addEventListener("submit", generatePoem);
  } else {
    console.warn("Form #poem-generator-form not found in DOM.");
  }
});
