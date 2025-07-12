/* Task 2 */

const getDataFromServer = (status, callback) => {
  if (status) {
    setTimeout(() => {
      const products = ["Product 1", "Product 2", "Product 3"];
      callback(products, null);
    }, 3000);
  } else {
    const err = new Error("Failed to fetch data");
    callback(null, err);
  }
};

const processData = (value, status) => {
  try {
    if (!status) {
      console.log(value);
    } else {
      throw new Error(status);
    }
  } catch (err) {
    console.log(err);
  }
};

export { getDataFromServer, processData };
