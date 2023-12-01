fetch("./day1/input1.txt").then((r) => r.text()).then((d) => {
  result(d)
})
fetch("./day1/input2.txt").then((r) => r.text()).then((d) => {
  sInts = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  sInts.map((a, i) => d = d.replaceAll(a, a[0]+(i + 1)+a.slice(-1)))
  result(d)
})
let result = (d) => {
  ans = 0
  d.split("-").map((a) => {
    first = a.split('').find((b) => !isNaN(b))
    last = a.split('').findLast((b) => !isNaN(b))
    ans += Number(first + "" + last)
  })
  document.getElementById("answer").innerHTML += ans + " "
}