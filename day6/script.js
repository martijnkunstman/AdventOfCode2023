let data = [];
let timeArray;
let distanceArray;
fetch("input.txt")
//fetch("input1_test.txt")
.then((r) =>
  r.text().then((d) => {
    d = d.replaceAll("\r", "");
    d = d.split("\n");
    timeArray = d[0]
      .split(":")[1]
      .split(" ")
      .map((x) => parseInt(x))
      .filter(Number);
    distanceArray = d[1]
      .split(":")[1]
      .split(" ")
      .map((x) => parseInt(x))
      .filter(Number);
    console.log(timeArray);
    console.log(distanceArray);
    //part 1
    let solutiuonsArray = []
    for (let i = 0; i < timeArray.length; i++) {
    let solutions = 0;
      for (let j = 1; j <= timeArray[i]; j++) {
        let buttonPushTime = j;
        let timeleft = timeArray[i] - j;
        let distance = timeleft * buttonPushTime;
        if (distance > distanceArray[i]) {
          solutions++;
        }
      }
      solutiuonsArray.push(solutions);
    }
    //part 2
    let timep2 = Number(timeArray.join(""));
    let distance2 = Number(distanceArray.join(""));
    console.log(timep2);
    console.log(distance2);

    let solutions2 = 0;
      for (let j = 1; j <= timep2; j++) {
        let buttonPushTime = j;
        let timeleft = timep2 - j;
        let distance = timeleft * buttonPushTime;
        if (distance > distance2) {
          solutions2++;
        }
      }
     
    
    //
    console.log(solutiuonsArray);
    console.log(solutiuonsArray.reduce((a, b) => a * b, 1));
  
    console.log(solutions2);
  
  })
);
