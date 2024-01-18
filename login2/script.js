const user = document.querySelector(".inputUsername");
const pass = document.querySelector(".inputPassword");
const check = document.querySelector("#check");
const checkboxState = localStorage.getItem("checkboxState");
// const inputIcon = document.querySelector(".inputIcon");

if (checkboxState === "true") {
  check.checked = true;
  pass.type = "text";
} else {
  check.checked = false;
  pass.type = "password";
}

check.addEventListener("change", function () {
  if (check.checked) {
    pass.type = "text";
  } else {
    pass.type = "password";
  }

  localStorage.setItem("checkboxState", check.checked);
});

user.addEventListener("keydown", preventSpaceInput);
pass.addEventListener("keydown", preventSpaceInput);

function preventSpaceInput(e) {
  if (e.code === "Space") {
    e.preventDefault();
  }
}

window.addEventListener("beforeunload", function () {
  localStorage.removeItem("checkboxState");
});

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

// check.onclick = togglePassword;

// function togglePassword() {
//   if (check.checked) input.type = "text";
//   else input.type = "password";
// }
