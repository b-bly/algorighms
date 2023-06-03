function isPrime(num) {
  if (num <= 2) return false;
  return Array.from(Array(num).keys()).slice(2); //.filter(i:> !(num % i)).length == 0
}

function outed(meet, boss) {
  total = 0;
  for (const key in meet) {
    if (meet[key] === boss) {
      total += meet[key] * 2;
    } else {
      total += meet[key];
    }
  }

  const result = Math.round(total / Object.keys(meet).length);

  if (total / Object.keys(meet).length <= 5) {
    return "Get Out Now!";
  }
  return "Nice Work Champ!";
}

//   console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'))
let result = outed(
  {
    tim: 2,
    jim: 7,
    randy: 6,
    sandy: 9,
    andy: 2,
    katie: 3,
    laura: 9,
    saajid: 1,
    alex: 6,
    john: 3,
    mr: 1,
  },
  "sandy"
);

function boredom(staff) {
  const points = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  const score = Object.keys(staff).reduce(
    (acc, name) => (acc += points[staff[name]]),
    0
  );
  if (score <= 80) {
    return "kill me now";
  } else if (score < 100) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
  //   <=80: 'kill me now'
  // < 100 & > 80: 'i can handle this'
  // 100 or over: 'party time!!'
}
result = boredom({
  tim: "change",
  jim: "accounts",
  randy: "canteen",
  sandy: "change",
  andy: "change",
  katie: "IS",
  laura: "change",
  saajid: "IS",
  alex: "trading",
  john: "accounts",
  mr: "finance",
}); // 'kill me now'

function broken(x) {
  return x
    .split("")
    .map((number) => (number === "0" ? "1" : "0"))
    .join("");
}
result = broken("10000000101101111110011001000");

function meeting(x) {
  return x.indexOf("O") > -1 ? x.indexOf("O") : "None available!";
}

result = meeting(["X", "X"]);
