let data = [];
//fetch("input.txt")
fetch("input1_test.txt")
  .then((r) => r.text())
  .then((d) => {
    //console.log(d);
    d = d.replaceAll("\r", "");    
    data = d.split("\n\n").map((e) => {
      return e = e.split(":")[1];
    });
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].replace("\n", " ").trim().split("\n").map((e) => {
        return e.split(" ").map((e) => {  return Number(e) })
      });
    }
    console.log(data);
  });
