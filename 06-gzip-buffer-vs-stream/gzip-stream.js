import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'

const filename = process.argv[2]

// kein Errorhandling für Lesbarkeit hier;
// pipe: readable -> writable
createReadStream(filename) // readable
  .pipe(createGzip()) // transfrom
  .pipe(createWriteStream(`${filename}.gz`)) // writable
  .on('finish', () => console.log('File successfully compressed'))
