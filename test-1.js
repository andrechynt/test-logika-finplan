const multipleFunction = (n) => {
  const arr = [];
  const z = "Z";
  let i = 1;

  while (arr.length != n) {
    if (i % 3 == 0 && i % 7 == 0) {
      arr.push(z);
    } else if (i % 3 == 0 || i % 7 == 0) {
      arr.push(i);
    }

    i++;
  }

  return arr;
};

console.log(multipleFunction(13).join(", "));
