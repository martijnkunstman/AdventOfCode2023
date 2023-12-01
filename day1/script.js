fetch("./input1.txt")
  .then((r) => r.text())
  .then((d) => {
    result(d);
  });
fetch("./input2.txt")
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
    let tempNumberStart = "";
    let tempNumberEnd = "";
    a.split("").map((b) => {
      !isNaN(b) && tempNumberStart == "" && (tempNumberStart = b);
      !isNaN(b) && (tempNumberEnd = b);
    });
    answer += Number(tempNumberStart + "" + tempNumberEnd);
  });
  document.getElementById("answer").innerHTML += answer + "<br>";
};
