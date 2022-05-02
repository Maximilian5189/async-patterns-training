import { Writable } from "stream"
import { promises as fs } from "fs"
import { dirname, join } from "path"
import mkdirp from "mkdirp"

const writeStream = new Writable({
  objectMode: true,
  write(chunk, encoding, cb) {
    mkdirp(dirname(chunk.path))
      .then(() => fs.writeFile(chunk.path, chunk.content))
      .then(() => cb())
      .catch(cb)
  },
})

writeStream.write({ path: join("files", "file1.txt"), content: "Hello" })
writeStream.write({ path: join("files", "file2.txt"), content: "Node.js" })
writeStream.write({ path: join("files", "file3.txt"), content: "streams" })
writeStream.end(() => console.log("all files created"))
