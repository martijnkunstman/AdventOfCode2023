let data = [];
let numbers = [];
let symbols = [];
let gears = [];
let answer1 = 0;
let answer2 = 0;
fetch("input.txt")
//fetch("input1_test.txt")
  .then((r) => r.text())
  .then((d) => {
    data = d.split("\n");
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      // numbers part 1 and 2
      let regexnumber = /(\d+)/g;
      while ((match = regexnumber.exec(data[i])) != null) {
        //console.log(match[0] + "match found at " + match.index);
        numbers.push({
          nearsymbol: false,
          number: Number(match[0]),
          y: i,
          x: match.index,
        });
      }
      // symbols part 1
      let regexsymbol = /[^.\d]/g;
      while ((match = regexsymbol.exec(data[i])) != null) {
        //console.log(match[0] + "match found at " + match.index);
        symbols.push({ symbol: match[0], y: i, x: match.index });
      }
      // gears part 2
      let regexgears = /[*]/g;
      while ((match = regexgears.exec(data[i])) != null) {
        //console.log(match[0] + "match found at " + match.index);
        gears.push({ symbol: match[0], y: i, x: match.index, numbers: [] });
      }
      //
    }
    // part 1
    //go through all the numbers and check if there is a symbol is next to it or above it
    for (let i = 0; i < numbers.length; i++) {
      let temp = String(numbers[i].number).split("");
      for (let j = 0; j < temp.length; j++) {
        if (checknearsymbol(numbers[i].x + j, numbers[i].y)) {
          numbers[i].nearsymbol = true;
        }
      }
    }
    // part 1
    //add numbers that are close to a symbol to answer1
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].nearsymbol) {
        answer1 += numbers[i].number;
      }
    }
    // part 2
    //add numbers that are close to a gear
    for (let i = 0; i < gears.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (
          checknearnumber(
            gears[i].x,
            gears[i].y,
            numbers[j].x,
            numbers[j].y,
            String(numbers[j].number).length
          )
        ) {
          gears[i].numbers.push(numbers[j].number);
        }
      }
    }
    //add numbers of gears that have only two numbers to answer2
    for (let i = 0; i < gears.length; i++) {
      temp = 0;
      if (gears[i].numbers.length == 2) {
        temp = gears[i].numbers[0]*gears[i].numbers[1];
      }
      answer2 += temp
    }

    //console.log(numbers);
    //console.log(symbols);
    console.log(answer1);
    console.log(answer2);
  });

function checknearnumber(x1, y1, x2, y2, count) {
  for (let j = 0; j < count; j++) {
    if (x1 == x2 - 1 + j && y1 == y2 - 1) {
      return true;
    }
    if (x1 == x2 + j && y1 == y2 - 1) {
      return true;
    }
    if (x1 == x2 + 1 + j && y1 == y2 - 1) {
      return true;
    }
    if (x1 == x2 - 1 + j && y1 == y2) {
      return true;
    }
    if (x1 == x2 + 1 + j && y1 == y2) {
      return true;
    }
    if (x1 == x2 - 1 + j && y1 == y2 + 1) {
      return true;
    }
    if (x1 == x2 + j && y1 == y2 + 1) {
      return true;
    }
    if (x1 == x2 + 1 + j && y1 == y2 + 1) {
      return true;
    }
  }

  return false;
}

function checknearsymbol(x, y) {
  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i].x == x - 1 && symbols[i].y == y - 1) {
      return true;
    }
    if (symbols[i].x == x && symbols[i].y == y - 1) {
      return true;
    }
    if (symbols[i].x == x + 1 && symbols[i].y == y - 1) {
      return true;
    }
    if (symbols[i].x == x - 1 && symbols[i].y == y) {
      return true;
    }
    if (symbols[i].x == x + 1 && symbols[i].y == y) {
      return true;
    }
    if (symbols[i].x == x - 1 && symbols[i].y == y + 1) {
      return true;
    }
    if (symbols[i].x == x && symbols[i].y == y + 1) {
      return true;
    }
    if (symbols[i].x == x + 1 && symbols[i].y == y + 1) {
      return true;
    }
  }
  return false;
}

/*
[-1, -1], 
[-1, 0], 
[-1, 1], 
[0, -1], 
[0, 1], 
[1, -1], 
[1, 0], 
[1, 1]
*/
