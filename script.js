function pertambahan() {
  var angka1 = Number(document.getElementById("angka1").value);
  var angka2 = Number(document.getElementById("angka2").value);
  var result = angka1 + angka2;
  document.getElementById("result").value = result;
}

function pengurangan() {
  var angka1 = Number(document.getElementById("angka1").value);
  var angka2 = Number(document.getElementById("angka2").value);
  var result = angka1 - angka2;
  document.getElementById("result").value = result;
}

function perkalian() {
  var angka1 = Number(document.getElementById("angka1").value);
  var angka2 = Number(document.getElementById("angka2").value);
  var result = angka1 * angka2;
  document.getElementById("result").value = result;
}

function pembagian() {
  var angka1 = Number(document.getElementById("angka1").value);
  var angka2 = Number(document.getElementById("angka2").value);
  var result = angka1 / angka2;
  document.getElementById("result").value = result;
}

function reset() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("result").value = "";
}
