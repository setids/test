<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bintang PHP</title>
  <style>
    body {
      font-family: monospace;
      text-align: center;
    }
  </style>
</head>

<body>
  <h2>Polanya adalah:</h2>
  <br>
  <?php

  for ($i = 5; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
      echo "* ";
    }
    echo "<br>";
  }
  ?>
</body>

</html>