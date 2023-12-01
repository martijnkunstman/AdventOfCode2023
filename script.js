for (let i = 1; i < 26; i++) {
  document.getElementById("buttons").innerHTML +=
    "<button onclick='showDay(" + i + ")'>day " + i + "</button>";
}
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
