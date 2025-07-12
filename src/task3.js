const fetchData = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Gagal Fetch Data !");
    }

    const getData = data.map((item) => {
      const getDomisili = item.address.city;
      return {
        nama: item.name,
        domisili: getDomisili,
      };
    });

    const sortedDom = getData.sort((a, b) =>
      a.domisili > b.domisili ? 1 : b.domisili > a.domisili ? -1 : 0
    );

    console.log(sortedDom);
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
