let data = [];
let timeArray;
let distanceArray;
fetch("input.txt")
  //fetch("input1_test.txt")
  .then((r) =>
    r.text().then((d) => {
      d = d.replaceAll("\r", "");
      data = d.split("\n").map((x) => x.split(" "));
      for (let i = 0; i < data.length; i++) {
        data[i][0] = data[i][0].split("");
        for (let j = 0; j < data[i][0].length; j++) {
          data[i][0][j] = replaceLetter(data[i][0][j]);
        }
        data[i][1] = Number(data[i][1]);
        data[i][2] = 0;
        data[i][3] = 0;
      }
      for (let i = 0; i < data.length; i++) {
        data[i][2] = convertHandToScore(data[i][0]);
      }

      //sort data on 2nd column
      data.sort(function (a, b) {
        return a[2] - b[2];
      });

      answer1 = 0;

      for (let i = 0; i < data.length; i++) {
        data[i][3] = i + 1;
        answer1 = answer1 + data[i][1] * data[i][3];
      }

      console.log(data);
      console.log(answer1);

      //part 2
      console.log("jacks:" + jacks);
      for (let i = 0; i < data.length; i++) {
        makeBestHand(data[i][0]);
      }
      //

    })
  );

function makeBestHand(hand) {
  let countJacks = 0;
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] == 21) {
      countJacks++;
    }
  }
  if (countJacks > 0) {
    if (countJacks == 1) {
     
    }
    if (countJacks == 2) {
     
    }
    if (countJacks == 3) {
    
    }
    if (countJacks == 4) {
    
    }
    if (countJacks == 5) {
    
    }
    
  }
}

function convertHandToScore(hand) {
  //Five of a kind
  if (hand.filter((x, i, a) => a.indexOf(x) == i).length == 1) {
    return Number("7" + hand.join(""));
  }
  //Four of a kind OR full house
  if (hand.filter((x, i, a) => a.indexOf(x) == i).length == 2) {
    //check if first card is unique or 4 times
    let count = 0;
    for (let i = 1; i < hand.length; i++) {
      if (hand[0] == hand[i]) {
        count++;
      }
    }
    //Four of a kind
    if (count == 3 || count == 0) {
      return Number("6" + hand.join(""));
    }
    //Full house
    return Number("5" + hand.join(""));
  }
  //Three of a kind OR two pair
  if (hand.filter((x, i, a) => a.indexOf(x) == i).length == 3) {
    let count1 = 0;
    for (let i = 1; i < hand.length; i++) {
      if (hand[0] == hand[i]) {
        count1++;
      }
    }
    let count2 = 0;
    for (let i = 0; i < hand.length; i++) {
      if (i != 1) {
        if (hand[1] == hand[i]) {
          count2++;
        }
      }
    }
    let count3 = 0;
    for (let i = 0; i < hand.length; i++) {
      if (i != 2) {
        if (hand[2] == hand[i]) {
          count3++;
        }
      }
    }
    //Three of a kind
    if (count1 == 2 || count2 == 2 || count3 == 2) {
      return Number("4" + hand.join(""));
    }
    //Two pair
    return Number("3" + hand.join(""));
  }
  //One pair
  if (hand.filter((x, i, a) => a.indexOf(x) == i).length == 4) {
    return Number("2" + hand.join(""));
  }
  //High card
  if (hand.filter((x, i, a) => a.indexOf(x) == i).length == 5) {
    return Number("1" + hand.join(""));
  }
  console.log("ERROR");
}

let jacks = 0;

function replaceLetter(value) {
  if (value == "A") {
    return 24;
  }
  if (value == "K") {
    return 23;
  }
  if (value == "Q") {
    return 22;
  }
  if (value == "J") {
    jacks++;
    return 21;
  }
  if (value == "T") {
    return 20;
  }
  return Number("1" + value);
}
