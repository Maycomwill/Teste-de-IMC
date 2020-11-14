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
  var res = window.document.querySelector("div.resultado");
  if (s1 < 16) {
    res.style.background = "#0000FF";
  } else if (s1 >= 16 && s1 <= 16.99) {
    res.style.background = "#0066FF";
  } else if (s1 >= 17 && s1 <= 18.4) {
    res.style.background = "#00CC99";
  } else if (s1 >= 18.5 && s1 <= 24.99) {
    res.style.background = "#00FF00";
  } else if (s1 >= 25 && s1 <= 29.99) {
    res.style.background = "#FFCC00";
  } else if (s1 >= 30 && s1 <= 34.99) {
    res.style.background = "#FF6600";
  } else if (s1 >= 35 && s1 <= 39.99) {
    res.style.background = "#FF3300";
  } else if (s1 > 40) {
    res.style.background = "#FF0000";
  } else {
  }
}
