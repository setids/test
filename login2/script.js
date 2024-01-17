const input = document.querySelector(".inputPassword");
// const inputIcon = document.querySelector(".inputIcon");
const check = document.querySelector("#check");

// inputIcon.addEventListener("click", (e) => {
//   e.preventDefault();

//   inputIcon.setAttribute(
//     "src",
//     input.getAttribute("type") === "password" ? "eye-off.svg" : "eye.svg"
//   );

//   input.setAttribute(
//     "type",
//     input.getAttribute("type") === "password" ? "text" : "password"
//   );
// });

check.onclick = togglePassword;

function togglePassword() {
  if (check.checked) input.type = "text";
  else input.type = "password";
}
