async function generateIdea() {
  const result = document.getElementById("result");
  const activity = document.getElementById("activity");
  const type = document.getElementById("type");
  const screenshoot = document.getElementById("screenshoot");
  const mdPlusButton = document.querySelector(".fab__icon");
  const iconElement = screenshoot.querySelector("ons-icon");
  let count = 0;

  const url = "https://www.boredapi.com/api/activity";
  const response = await fetch(url);

  const api = await response.json();

  activity.textContent = api.activity;
  type.textContent = api.type.charAt(0).toUpperCase() + api.type.slice(1);

  type.style.display = "block";

  screenshoot.addEventListener("click", () => {
    count && location.reload();

    html2canvas(result).then((callback) => {
      screenshoot.setAttribute("href", callback.toDataURL("image/png"));
      screenshoot.setAttribute("download", "quotes.png");
      count = 1;
    });

    if (iconElement) {
      iconElement.setAttribute("icon", "md-download");
    }
  });

  mdPlusButton.addEventListener("click", () => {
    screenshoot.removeAttribute("href");
    count = 0;

    if (iconElement) {
      iconElement.setAttribute("icon", "md-camera");
    }
  });
}
