const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", (e) => {
  textarea.style.height = "63px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});

// function convertText() {
//   let textAreaInput = document.getElementById("inputText");

//   let originalText = textAreaInput.value;

//   let lines = originalText.split("\n");

//   for (var i = 0; i < lines.length; i++) {
//     if (lines[i].trim().startsWith("“")) {
//       lines[i] = lines[i].charAt(0).toUpperCase() + lines[i].slice(1);
//     } else {
//       lines[i] = lines[i].charAt(0).toUpperCase() + lines[i].slice(1);
//     }
//   }

//   let capitalizeResult = lines.join("\n");

//   textAreaInput.value = capitalizeResult;
// }

function convertText() {
  let textAreaInput = document.getElementById("inputText");

  if (textAreaInput.value.trim() !== "") {
    let originalText = textAreaInput.value;

    let lines = originalText.split("\n");

    for (let i = 0; i < lines.length; i++) {
      // Mengubah huruf setelah tanda kutip ganda kiri menjadi besar
      lines[i] = modifyAfterLeftQuote(lines[i]);

      // Memeriksa apakah baris dimulai dengan tanda kutip ganda kiri
      if (lines[i].trim().startsWith("“")) {
        // Jika ya, biarkan tanpa perubahan
      } else {
        // Jika tidak, ubah huruf pertama menjadi besar
        lines[i] = capitalizeFirstLetter(lines[i]);
      }
    }

    let capitalizeResult = lines.join("\n");

    textAreaInput.value = capitalizeResult;
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function modifyAfterLeftQuote(str) {
  // Menggunakan ekspresi reguler untuk mengubah huruf setelah tanda kutip ganda kiri menjadi besar
  return str.replace(/“(\w)/g, function (match, p1) {
    return "“" + p1.toUpperCase();
  });
}

function copyToClipboard() {
  let textAreaInput = document.getElementById("inputText");

  textAreaInput.select();
  document.execCommand("copy");
  textAreaInput.value = "";
}
