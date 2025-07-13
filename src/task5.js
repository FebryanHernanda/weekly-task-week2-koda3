/* fs module */
import fs from "fs/promises";
/* path module */
import path from "path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import * as readline from "node:readline/promises";
/* readline module */
import { stdin as input, stdout as output } from "node:process";

/* Declare readline interface */
const rl = readline.createInterface({ input, output });

/* Path Variables Declaration */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* Write File Function*/
const writeFile = async () => {
  console.log("-----Create File------");
  const fileName = await rl.question("Masukkan Nama File : ");
  const fileType = await rl.question(
    "Masukkan Jenis File (ex: js, txt, pdf) : "
  );
  const fileContent = await rl.question("Isi File : ");
  console.log("-----Create File------");

  const file = path.join(`${fileName}.${fileType}`); // combine file name and type
  const filePath = path.join(__dirname, "data", file); // combine file path

  try {
    await fs.writeFile(filePath, fileContent, "utf8"); // create file based on filePath and fileContent with utf8 writing encoding
    console.log("Files created successfully!");
  } catch (err) {
    if (err.code === "ENOENT") {
      // checking error code
      console.error("Error writing files: ", err);
    }
  }
};

/* Read File Function */
const readFile = async () => {
  console.log("-------Read File------");
  const fileName = await rl.question("Masukkan Nama File : ");
  const fileType = await rl.question(
    "Masukkan Jenis File (ex: js, txt, pdf) : "
  );
  console.log("-------Read File------");

  const file = path.join(`${fileName}.${fileType}`); // combine file name and type
  const filePath = path.join(__dirname, "data", file); // combine file path

  try {
    const data = await fs.readFile(filePath, "utf8"); // read file based on filePath with utf8 encoding
    console.log("File Content :", data);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File does not exists");
    } else {
      console.error("Error reading files:", err);
    }
  }
};

/* Read Folder Function */
const readFolder = async () => {
  const folderPath = path.join(__dirname, "data");

  try {
    const seeFile = await fs.readdir(folderPath); // read file on folder
    console.log("------Isi Folder------");
    console.log(seeFile);
    console.log("------Isi Folder------");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File does not exists");
    } else {
      console.error("Error reading files:", err);
    }
  }
};

/* Delete File Function */
const deleteFile = async () => {
  console.log("------Delete File-----");
  const fileName = await rl.question("Masukkan Nama File : ");
  const fileType = await rl.question(
    "Masukkan Jenis File (ex: js, txt, pdf) : "
  );
  console.log("------Delete File-----");

  const file = path.join(`${fileName}.${fileType}`); // combine file name and type
  const filePath = path.join(__dirname, "data", file); // combine file path

  try {
    await fs.access(filePath); // check file access
    await fs.unlink(filePath); // deleting file
    console.log("Deleting file successfully!");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File does not exists");
    } else {
      console.error("Error deleting files:", err);
    }
  }
};

/* Rename File Function */
const renameFile = async () => {
  console.log("------Rename File-----");
  const fileName = await rl.question("Masukkan Nama File Lama : ");
  const fileType = await rl.question(
    "Masukkan Jenis File (ex: js, txt, pdf) : "
  );
  console.log("------Rename File-----");

  const oldFile = path.join(`${fileName}.${fileType}`); // combine file name and type
  const oldPath = path.join(__dirname, "data", oldFile); // combine file path

  try {
    await fs.access(oldPath); // check file access from old file path

    const fileNameNew = await rl.question("Masukkan Nama File Baru : ");
    const fileTypeNew = await rl.question(
      "Masukkan Jenis File (ex: js, txt, pdf) : "
    );
    const newFile = path.join(`${fileNameNew}.${fileTypeNew}`); // combile new file name and type
    const newPath = path.join(__dirname, "data", newFile); // combine file path

    await fs.rename(oldPath, newPath); // rename oldpath to newpath

    console.log("File renamed successfully");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File does not exists");
    } else {
      console.error("Error renaming files:", err);
    }
  }
};

/* Update Content Function */
const updateContent = async () => {
  console.log("------Create File-----");
  const fileName = await rl.question("Masukkan Nama File : ");
  const fileType = await rl.question(
    "Masukkan Jenis File (ex: js, txt, pdf) : "
  );
  const fileContent = await rl.question("Isi File : ");
  console.log("------Create File-----");

  const file = path.join(`${fileName}.${fileType}`); // combine file name and type
  const filePath = path.join(__dirname, "data", `${file}`); // combine file path

  const oldContent = await fs.readFile(filePath, "utf8"); // read old content
  const newContent = oldContent + "\n" + fileContent; // combine new content with old content
  try {
    await fs.writeFile(filePath, newContent, "utf8"); // overwrite old file with updated file
    console.log("Update content successfully!");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("Error writing files: ", err);
    }
  }
};

/* Display Program Function */
const displayProgram = async () => {
  while (true) {
    console.log("---------MENU---------");
    console.log("1. Buat File");
    console.log("2. Lihat Folder");
    console.log("3. Lihat Isi File");
    console.log("4. Update Isi File");
    console.log("5. Rename File");
    console.log("6. Delete File");
    console.log("7. Keluar");
    console.log("----------------------");

    const category = await rl.question("Masukkan pilihan (1-7) : ");

    switch (category) {
      case "1":
        await writeFile();
        break;
      case "2":
        await readFolder();
        break;
      case "3":
        await readFile();
        break;
      case "4":
        await updateContent();
        break;
      case "5":
        await renameFile();
        break;
      case "6":
        await deleteFile();
        break;
      case "7":
        return rl.close();
      default:
        console.log("Input tidak valid!");
        break;
    }
  }
};

export default displayProgram;
