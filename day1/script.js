fetch("./day1/input.txt").then((r) => r.text()).then((d) => {
  result(d)
  n = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  n.map((a, i) => d = d.replaceAll(a, a[0]+(i + 1)+a.slice(-1)))
  result(d)
})
result = (d) => {
  r = 0
  d.split("-").map((a) => {
    f = a.split('').find((b) => !isNaN(b))
    l = a.split('').findLast((b) => !isNaN(b))
    r += f*10 + l*1
  })
  document.querySelector("#answer").innerHTML += r + " "
}