async function generateIdea() {
  const result = document.getElementById("result");
  const activity = document.getElementById("activity");
  const type = document.getElementById("type");
  const screenshoot = document.getElementById("screenshoot");
  const iconElement = screenshoot.querySelector("ons-icon");

  const url = "https://www.boredapi.com/api/activity";
  const response = await fetch(url);

  const api = await response.json();

  activity.textContent = api.activity;
  type.textContent = api.type;

  type.style.display = "block";

  let count = 0;

  screenshoot.addEventListener("click", () => {
    count && location.reload();

    html2canvas(result).then((callback) => {
      screenshoot.setAttribute("href", callback.toDataURL("image/png"));
      screenshoot.style.textDecoration = "none";
      count = 1;
      if (iconElement) {
        iconElement.setAttribute("icon", "md-download");
      }
    });
  });
}
