const fetchData = (status) => {
  return new Promise((resolve, reject) => {
    if (status) {
      setTimeout(() => {
        resolve("Data berhasil disimpan");
      }, 3000);
    } else {
      reject("Gagal mengambil Data");
    }
  });
};

const thenCatch = (status) => {
  fetchData(status)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDataAsync = async (status) => {
  const response = await fetchData(status);
  console.log(response);
};

const getDataTC = async (status) => {
  try {
    const response = await fetchData(status);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { thenCatch, getDataAsync, getDataTC };
