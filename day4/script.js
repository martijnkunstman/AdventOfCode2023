let data = [];
let answer1 = 0;
let answer2 = 0;
fetch("input.txt")
//fetch("input1_test.txt")
  .then((r) => r.text())
  .then((d) => {
    d = d.replaceAll("  ", " ");
    data = d.split("\n");
    //data = d.split("\r\n");
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].split("|").map((x) =>
        x
          .substring(x.indexOf(":") + 1)
          .trim()
          .split(" ")
          .map((y) => Number(y))
      );
    }
    //part 1
    for (let i = 0; i < data.length; i++) {
      let count = 0;
      console.log(data[i]);
      let found = 0;

      for (let j = 0; j < data[i][0].length; j++) {
        for (let k = 0; k < data[i][1].length; k++) {
          if (data[i][0][j] == data[i][1][k]) {
            found++;
          }
        }
      }

      if (found != 0) {
        console.log("found:" + 2 ** (found-1));
        answer1 += 2 ** (found-1);
      }
    }
    console.log(answer1);

    //
    console.log(data);
  });

//data
