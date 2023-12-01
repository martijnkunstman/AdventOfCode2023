let day = 1;

for (let i = 1; i < 26; i++) {
  if (i <= day) {
  document.getElementById("buttons").innerHTML +=
    "<button onclick='showDay(" + i + ")'>day " + i + "</button>";
  }
  else {
    document.getElementById("buttons").innerHTML +=
    "<button disabled style='opacity:0.50;'>day " + i + "</button>";
  }
}
showDay(day);
function showDay(day) {
  document.getElementById("answer").innerHTML = "";
  document.getElementById("code").innerHTML = '<pre><code id="jscode" class="language-javascript"></code></pre>';
  fetch("day" + day + "/script.js")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      document.getElementById("jscode").innerHTML = data;
      hljs.highlightAll();
      eval(data);
      
    });
}
