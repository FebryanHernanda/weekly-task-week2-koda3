/* Task 2 */

/* FetchData Promise Function */
/* 
Promise merupakan sebuah objek yang belum diketahui nilainya saat promise dibuat.
promise nantinya akan mengembalikan nilai baik bersifat true / false dari hasil operasi asynchronus.
*/
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

/* Then-Catch function */
/* 
Then-Catch merupakan sebuah bagian dari promise yang digunakan untuk mengelola hasil dari operasi asynchronous
yang mungkin berhasil atau gagal.
- Then : Merupakan sebuah metode yang dipanggil pada promise setelah operasi asynchronous berhasil.
- Catch : merupakan sebuah metode yang dipanggil untuk menangkap sebuah error saat operasi asynchronous gagal.
*/
const thenCatch = (status) => {
  fetchData(status)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

/* Async-Await function */
/* 
Async Await merupakan fitur untuk menangani proses asynchronous, sebab dijavascript code akan berjalan secara synchronus.
Async-await sendiri merupakan sebuah solusi lain untuk menangani sebuah promise
- async : mengubah function seolah-olah berjalan seperti synchronous.
- await : menunda eksekusi hingga proses pada asynchronous selesai.

Pada kode dibawah ini async-await berjalan. namun ketika terjadi error, kode akan stop dan rusak tanpa penjelasan yang cukup.
Hal ini dikarenakan tidak ada fungsi yang mengatasi error sebagai handling dari sebuah promise.
*/
const getDataAsync = async (status) => {
  const response = await fetchData(status);
  console.log(response);
};

/* Try-Catch funciton */
/* 
Try Catch merupakan sebuah error handling untuk proses async/await.
- Try sendiri biasanya diisi code javascript yang mungkin dapat terjadi error
- Catch sendiri merupakan sebuah blok kode yang akan menangkap error dari kode yang
  terdapat pada blok try
*/
const getDataTC = async (status) => {
  try {
    const response = await fetchData(status);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { thenCatch, getDataAsync, getDataTC };
