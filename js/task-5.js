function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const body = document.querySelector("body");
  const btn = document.querySelector("button.change-color");
  const span = document.querySelector("span.color");

  btn.addEventListener("click", () => 
  span.textContent = body.style.backgroundColor = getRandomHexColor());