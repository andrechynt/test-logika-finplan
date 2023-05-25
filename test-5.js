const pattern = (n, i = 0) => {
  const x = "X";
  const o = "O";

  if (n % 2 == 0) {
    console.log("Harus bilangan ganjil");
  } else {
    while (n != i) {
      let j = n - i;

      if (j == 1 || j == n) {
        const arr = [];

        for (let z = 0; z < n; z++) {
          arr.push(x);
        }
        console.log(...arr);
      } else {
        const arr = [];

        for (let z = 0; z < n; z++) {
          if (z == 0 || z == n - 1 || z == j - 1) {
            arr.push(x);
          } else {
            arr.push(o);
          }
        }

        console.log(...arr);
      }

      i++;

      
      return pattern(n, (i = i));
    }
  }
};

pattern(5);
pattern(3);
pattern(7);
pattern(2);
