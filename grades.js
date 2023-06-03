const points = {
  A: 30,
  B: 20,
  C: 10,
  D: 5,
};

function findHack(arr) {
  return arr
    .filter(([name, score, grades]) => {
        grades = grades.filter((grade) => Object.keys(points).includes(grade))
        console.log(name)
      if (score > 200) {
        return true;
      }
      console.log('score', score)
      console.log('actual')
      
      const allAboveB = grades.every((grade) => ["A", "B"].includes(grade));
      const bonus = grades.length >= 5 && allAboveB ? 20 : 0;
      const actualScore =
        grades.reduce((acc, grade) => (acc += points[grade]), 0) + bonus;

        console.log(actualScore)
      if (actualScore !== score) {
        return true;
      }
      return false;
    })
    .map(([name]) => name);
}

const arr =[
  ["Jane Webb", 10, ["G", "D", "E", "D"]],
  ["Jane Watts", 35, ["C", "C", "C", "D"]],
  ["Bill Lawrence", 70, ["F", "A", "B", "B"]],
  ["Jane Bradley", 300, ["A", "E", "B", "D", "F", "G"]],
  ["Bill Lawrence", 50, ["E", "G", "G", "B", "C"]],
  ["Jack Bradley", 10, ["G", "C", "E", "E", "G"]],
  ["Bill Lawrence", 150, ["A", "A", "A", "E", "C", "A"]],
  ["Jack Webb", 30, ["D", "G", "D", "F", "F", "E"]],
  ["John Lawrence", 40, ["F", "B", "G", "E", "B", "H"]],
  ["Jack Bradley", 60, ["D", "D", "F", "A"]],
]
const expectede = [
  "Jane Bradley",
  "Bill Lawrence",
  "Bill Lawrence",
  "Jack Webb",
  "Jack Bradley",
];
const actual = [
  "Jane Webb",
  "Bill Lawrence",
  "Jane Bradley",
  "Bill Lawrence",
  "Jack Bradley",
  "Bill Lawrence",
  "Jack Webb",
  "John Lawrence",
  "Jack Bradley",
];
const result = findHack(arr);
console.log(result);
