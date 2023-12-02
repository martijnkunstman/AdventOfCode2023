fetch("./day1/input.txt").then((r) => r.text()).then((d) => {
  c(d)
  n = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  n.map((a, i) => d = d.replaceAll(a, a[0]+(i + 1)+a.slice(-1)))
  c(d)
})
c = (d) => {
  r = 0
  d.split("-").map((a) => {
    r += a.match(/\d/)*10 + a.match(/\d(?=\D*$)/)*1
  })
  document.querySelector("#answer").innerHTML += r + " "
}