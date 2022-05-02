import { createReadStream, createWriteStream } from "fs"
import { createGzip } from "zlib"

const filename = process.argv[2]

// kein Errorhandling für Lesbarkeit hier;
// pipe: readable -> writable
// createReadStream(filename) // readable
//   .pipe(createGzip()) // transfrom
//   .pipe(createWriteStream(`${filename}.gz`)) // writable
//   .on('finish', () => console.log('File successfully compressed'))

const fileStream = createReadStream(filename)
const gzipStream = fileStream.pipe(createGzip())
const writeStream = gzipStream.pipe(createWriteStream(`${filename}.gz`))
writeStream.on("finish", () => console.log("File successfully compressed")) // auf den writeStream subscriben; hier sieht man, dass Stream EventEmitter ist
