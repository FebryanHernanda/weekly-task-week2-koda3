const divideAndSort = (n) => {
  let result = [];
  let temp = [];
  const array = n.toString().split("").map(Number);

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      temp.push(array[i]);
    } else {
      const sort = temp.sort((a, b) => a - b);
      result.push(sort);
      temp = [];
    }
  }

  if (temp.length > 0) {
    const sort = temp.sort((a, b) => a - b);
    result.push(sort);
  }

  const toNumber = result.map((item) => {
    return Number(item.join(""));
  });
  
  console.log(Number(toNumber.join("")));
};

export default divideAndSort