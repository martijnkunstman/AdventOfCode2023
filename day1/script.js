fetch("./day1/input1.txt").then((r) => r.text()).then((d) => {
  result(d)
})
fetch("./day1/input2.txt").then((r) => r.text()).then((d) => {
  replaceNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  replaceNumbers.map((a, i) => d = d.replaceAll(a, a[0]+(i + 1)+a.slice(-1)))
  result(d)
})
let result = (d) => {
  answer = 0
  d.split("-").map((a) => {
    first = a.split('').find((b) => !isNaN(b))
    last = a.split('').findLast((b) => !isNaN(b))
    answer += Number(first + "" + last)
  })
  document.getElementById("answer").innerHTML += answer + " "
}