import { createReadStream, createWriteStream } from "fs"
import { createGzip } from "zlib"

const filename = process.argv[2]

// // pipe: readable -> writable
// createReadStream(filename) // readable
//   .pipe(createGzip()) // transfrom
//   .pipe(createWriteStream(`${filename}.gz`)) // writable
//   .on('finish', () => console.log('File successfully compressed'))
//   .on('error', () => console.log("error!"))

const fileStream = createReadStream(filename).on("error", (err) => console.log("error!", err))
const gzipStream = fileStream.pipe(createGzip())
const writeStream = gzipStream.pipe(createWriteStream(`${filename}.gz`))
writeStream.on("finish", () => console.log("File successfully compressed")) // auf den writeStream subscriben; hier sieht man, dass Stream EventEmitter ist
