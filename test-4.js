const findNotExistNum = (num) => {
  const getEndNum = Math.max(...num);
  let getStartNum = Math.min(...num);
  const arr = [];

  while (getStartNum < getEndNum) {
    if (!num.includes(getStartNum)) {
      arr.push(getStartNum);
    }

    getStartNum++;
  }

  return arr;
};

const findSmallNum = (num) => Math.min(...num);

console.log(findSmallNum(findNotExistNum([5, 2, 8, 4, 3, 10])));
console.log(findSmallNum(findNotExistNum([2, 3, 4, 6])));
console.log(findSmallNum(findNotExistNum([8, 6, 7, 12])));