const x = new XMLHttpRequest();
x.onload = function () {
  document.getElementById("footer").innerHTML = this.responseText;
}
x.open("GET", "hidden/footer.html", true);
x.send();
