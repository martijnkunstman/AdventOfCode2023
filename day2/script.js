let data = [];
let add;
let answer = 0;
let answer2= 0;
let mingreen = 0;
let minblue = 0;
let minred = 0;
fetch("input.txt")
//fetch("input1_test.txt")
  .then((r) => r.text())
  .then((d) => {
    data = d
      .split("-")
      .map((games) => games.split(";").map((game) => game.split(",")));
    for (let i = 0; i < data.length; i++) {
      add = i+1;
      mingreen = 0;
      minblue = 0;
      minred = 0;
      for (let j = 0; j < data[i].length; j++) {
        for (let k = 0; k < data[i][j].length; k++) {
          if (data[i][j][k].includes(":")) {
            data[i][j][k] = data[i][j][k].split(":")[1].trim();
          } else {
            data[i][j][k] = data[i][j][k].trim();
          }
          if (data[i][j][k].split(" ")[1] == "green")
          {
            if(Number(data[i][j][k].split(" ")[0])>mingreen)
            {
              mingreen = Number(data[i][j][k].split(" ")[0]);
            }
            if(data[i][j][k].split(" ")[0] > 13)
              {
                add = 0;
              }
          }
          if (data[i][j][k].split(" ")[1] == "blue")
          {
            if(Number(data[i][j][k].split(" ")[0])>minblue)
            {
              minblue = Number(data[i][j][k].split(" ")[0]);
            }
            if(data[i][j][k].split(" ")[0] > 14)
            {
              add = 0;
            }
          }
          if (data[i][j][k].split(" ")[1] == "red")
          {
            if(Number(data[i][j][k].split(" ")[0])>minred)
            {
              minred = Number(data[i][j][k].split(" ")[0]);
            }
            if(data[i][j][k].split(" ")[0] > 12)
            {
              add = 0;
            }
          }
        }
      }
      //console.log(mingreen+" "+minblue+" "+minred);
      answer += add;
      answer2 = answer2 + (mingreen * minblue * minred);
    }
    //console.log(data);
    console.log(answer);
    console.log(answer2);
  });
