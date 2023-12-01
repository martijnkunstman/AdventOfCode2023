fetch("./input.txt")
  .then((r) => r.text())
  .then((d) => {
    let answer1 = 0;
    d.split(/\r\n/g).map((a) => {
      let tempNumber = "";
      let tempNumberStart = "";
      let tempNumberEnd = "";
      a.split("").map(
        (b) => !isNaN(b) && tempNumberStart == "" && (tempNumberStart = b)
      );
      a.split("")
        .reverse()
        .map((b) => !isNaN(b) && tempNumberEnd == "" && (tempNumberEnd = b));
      tempNumber = tempNumberStart + tempNumberEnd;
      answer1 = answer1 + Number(tempNumber);
    });
    console.log("answer1:" + answer1);
    document.getElementById("answer1").innerHTML = answer1;
  });

  fetch("./input2.txt")
  .then((r) => r.text())
  .then((d) => {
    //solution 2
    let temp = "";
    let temp1 = "";
    let temp2 = "";
    let answer2 = 0;
    let findme = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    let data = d.split(/\r\n/g);
    for (let ii = 0; ii < data.length; ii++) {
      let place = 100;
      for (let i = 0; i < findme.length; i++) {
        let temp = data[ii].search(findme[i]);
        if (temp < place && temp != -1) {
          place = temp;
          temp1 = i%10;
        }
      }
      let datatemp = data[ii].split("").reverse().join("");
      let place2 = 100;
      for (let i = 0; i < findme.length; i++) {
        let temp = datatemp.search(findme[i].split("").reverse().join(""));
        if (temp < place2 && temp != -1) {
          place2 = temp;
          temp2 = i%10;
        }
      }
      temp = temp1 + "" + temp2;
      answer2 = answer2 + Number(temp);
    }
    console.log("answer2:" + answer2);
    document.getElementById("answer2").innerHTML = answer2;
  });


