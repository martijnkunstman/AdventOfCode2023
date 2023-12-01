fetch("./day1/input1.txt")
  .then((r) => r.text())
  .then((d) => {
    result(d);
  });
fetch("./day1/input2.txt")
  .then((r) => r.text())
  .then((d) => {
    let replaceNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    replaceNumbers.map((a, i) => d = d.replaceAll(a, a[0]+(i + 1)+a.slice(-1)));
    result(d);
  });
let result = (input) => {
  let answer = 0;
  input.split("-").map((a) => {
    let first = a.split('').find((b) => !isNaN(b));
    let last = a.split('').findLast((b) => !isNaN(b));
    answer += Number(first + "" + last);
  });
  document.getElementById("answer").innerHTML += answer + "<br>";
};