// https://scribbler.live/2023/10/10/Generating-Primes-JavaScript.html

function sieveOfEratothenes(n) {
  const primes = [];
  const arr = Array.from(n).fill(0).map((x, i) => i + 1);
  const sieve = new Set(arr);
  const outer = Array(n).fill(1).map((x, i) => x + 1 + i).filter(x => x * x <= n)
  console.log('outer')
  console.log(outer)

  outer.forEach(p => {
    const inner = Array(n).fill(0).map((z, i) => (p*p) + i).filter((x) => x <= n)
    console.log('inner')
    console.log(inner)
  })
  //
}
const result = sieveOfEratothenes(5)
