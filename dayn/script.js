//"./dayn/input.txt"
fetch("input.txt")
  .then((r) => r.text())
  .then((d) => {
    d.split("-").map((a) => {
      console.log(a);
    });
    r = "result";
    document.querySelector("#answer").innerHTML += r + " ";
  });
