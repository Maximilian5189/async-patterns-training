import * as fs from "fs"

const updateFile = () => {
  fs.readFile(
    // 1. neue IO operation für event demultiplexer anfordern
    "data.json",
    //
    function (err, data) {
      // 3. / 4. / 5. Handler aufrufen
      if (err) return console.log(err)

      data = JSON.parse(data)

      console.log(data) // 6. Hiernach übernimmt Event Demultiplexer wieder
    }
  )
}

updateFile()
// 2. Kontrolle an Applikation zurückgeben
console.log("synchronous operation")
