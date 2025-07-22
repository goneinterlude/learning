const { error } = require("console");
const fs = require("fs");
const path = require("path");
// File system
// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw err;
//   console.log("Papka bila sozdana");
// });
// fs.writeFile(
//   path.join(__dirname, "notes", "myNotes.txt"),
//   "Hello world",
//   (err) => {
//     if (err) throw err;
//     console.log("File was made");
//     fs.appendFile(
//       path.join(__dirname, "notes", "myNotes.txt"),
//       " from append file",
//       (err) => {
//         if (err) throw err;
//         console.log("File has been changed");
//         fs.readFile(
//           path.join(__dirname, "notes", "myNotes.txt"),
//           "utf-8",
//           (err, data) => {
//             if (err) throw err;
//             console.log(data);
//           }
//         );
//       }
//     );
//   }
// );
fs.rename(
  path.join(__dirname, "notes", "mynotes.txt"),
  path.join(__dirname, "notes", "notes.txt"),
  (err) => {
    if (err) throw err;
    console.log("File has been renamed");
  }
);
