import { createReadStream, createWriteStream } from "fs"
import { createGzip } from "zlib"
import { pipeline } from "stream"

const filename = process.argv[2]

// pipeline(
//   createReadStream(filename), // readable
//   createGzip(), // transfrom
//   createWriteStream(`${filename}.gz`), // writable
//   (err) => {
//     if (err) console.log(err)
//   }
// ).on("finish", () => console.log("File successfully compressed"))

// pipe: readable -> writable
// createReadStream(filename) // readable
//   .pipe(createGzip()) // transfrom
//   .pipe(createWriteStream(`${filename}.gz`)) // writable
//   .on("finish", () => console.log("File successfully compressed"))
//   .on("error", () => console.log("error!"))

const fileStream = createReadStream(filename)
const gzipStream = fileStream.pipe(createGzip())
const writeStream = gzipStream.pipe(createWriteStream(`${filename}.gz`))
writeStream.on("finish", () => console.log("File successfully compressed")) // auf den writeStream subscriben; hier sieht man, dass Stream EventEmitter ist
