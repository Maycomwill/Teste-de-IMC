var s1;

function clicar() {

  var tn1 = window.document.getElementById("peso");
  var tn2 = window.document.getElementById("altura");
  var res = window.document.querySelector("div.resultado");
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  s1 = (n1 / n2 ** 2).toFixed(2);
  res.innerHTML = `O seu IMC é igual a <strong> ${s1} </strong> Kg/m²`;
}

function cor() {
  var body = window.document.getElementById("fundo")
  var res = window.document.querySelector("div.resultado");
  if (s1 < 16) {
    body.style.background = "#0000FF";
  } else if (s1 >= 16 && s1 <= 16.99) {
    body.style.background = "#0066FF";
  } else if (s1 >= 17 && s1 <= 18.4) {
    body.style.background = "#00CC99";
  } else if (s1 >= 18.5 && s1 <= 24.99) {
    body.style.background = "#00FF00";
  } else if (s1 >= 25 && s1 <= 29.99) {
    body.style.background = "#FFCC00";
  } else if (s1 >= 30 && s1 <= 34.99) {
    body.style.background = "#FF6600";
  } else if (s1 >= 35 && s1 <= 39.99) {
    body.style.background = "#FF3300";
  } else if (s1 > 40) {
    body.style.background = "#FF0000";
  } else {
  }
}
