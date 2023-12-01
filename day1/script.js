fetch("./day1/input1.txt")
  .then((r) => r.text())
  .then((d) => {
    result(d);
  });
fetch("./day1/input2.txt")
  .then((r) => r.text())
  .then((d) => {
    d = d.replaceAll("one", "o1e");
    d = d.replaceAll("two", "t2o");
    d = d.replaceAll("three", "t3e");
    d = d.replaceAll("four", "f4r");
    d = d.replaceAll("five", "f5e");
    d = d.replaceAll("six", "s6x");
    d = d.replaceAll("seven", "s7n");
    d = d.replaceAll("eight", "e8t");
    d = d.replaceAll("nine", "n9e");
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