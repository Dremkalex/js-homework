function randomizer() {
  let store = [];

  return function() {
    if (store.length === 100) {
      throw new Error("Available numbers are already over");
    }
    let randNum = 1 + Math.floor(Math.random() * 100);
    while (store.includes(randNum)) {
      randNum = 1 + Math.floor(Math.random() * 100);
    }
    store.push(randNum);
    return randNum;
  };
}

const f = randomizer();
for (let i = 0; i <= 100; i++) {
  console.log(f());
}
