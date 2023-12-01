fetch("./day1/input.txt").then((r) => r.text()).then((d) => {
  result(d)
  sInts = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  sInts.map((a, i) => d = d.replaceAll(a, a[0]+(i + 1)+a.slice(-1)))
  result(d)
})
result = (d) => {
  ans = 0
  d.split("-").map((a) => {
    first = a.split('').find((b) => !isNaN(b))
    last = a.split('').findLast((b) => !isNaN(b))
    ans += Number(first + "" + last)
  })
  document.getElementById("answer").innerHTML += ans + " "
}