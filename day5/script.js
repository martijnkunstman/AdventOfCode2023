let data = [];
let answers = [];
let answer2 = 100000000000000;
fetch("input.txt")
//fetch("input1_test.txt")
  .then((r) => r.text())
  .then((d) => {
    //console.log(d);
    d = d.replaceAll("\r", "");
    data = d.split("\n\n").map((e) => {
      return (e = e.split(":")[1]);
    });
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i]
        .replace("\n", " ")
        .trim()
        .split("\n")
        .map((e) => {
          return e.split(" ").map((e) => {
            return Number(e);
          });
        });
    }
    console.log(data);
    //
    // part 1
    //
    for (let i = 0; i < data[0].length; i++) {
      for (let j = 0; j < data[0][i].length; j++) {
        //console.log("seed:"+data[0][i][j]);
        answers.push(procesSeed(data[0][i][j]));
        //
      }
    }
    answers.sort((a, b) => {
      return a - b;
    });
    console.log("answer1:" + answers[0]);
    //
    // part 2
    //
    for (let i = 0; i < data[0].length; i++) {
      for (let j = 0; j < data[0][i].length; j += 2) {
        //
        console.log(j);
        //        //
        for (let k = 0; k < data[0][i][j + 1]; k++) {
          if (procesSeed(data[0][i][j] + k)<answer2)
          {
            answer2 = procesSeed(data[0][i][j] + k);
          }
        }
      }
    }
    console.log("answer2:" + answer2);
  });

function procesSeed(seed) {
  for (let k = 1; k < 8; k++) {
    //all stages
    let temp = seed;
    for (
      let l = 0;
      l < data[k].length;
      l++ //all values in a stage
    ) {
      if (temp >= data[k][l][1] && temp < data[k][l][1] + data[k][l][2]) {
        seed = data[k][l][0] - (data[k][l][1] - seed);
        break;
      }
    }
  }
  return seed;
}
