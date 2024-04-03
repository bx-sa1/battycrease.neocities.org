const x = new XMLHttpRequest();
x.onload = function () {
  document.getElementById("header").innerHTML = this.response;
}
x.open("GET", "hidden/header.html", true);
x.send();
