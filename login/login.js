const input = document.querySelector(".inputPassword");
const inputIcon = document.querySelector(".inputIcon");

inputIcon.addEventListener("click", (e) => {
  e.preventDefault();

  inputIcon.setAttribute(
    "src",
    input.getAttribute("type") === "password" ? "eyes-off.svg" : "eyes.svg"
  );

  input.setAttribute(
    "type",
    input.getAttribute("type") === "password" ? "text" : "password"
  );
});
