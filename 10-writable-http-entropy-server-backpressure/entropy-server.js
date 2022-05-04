import { createServer } from "http"
import Chance from "chance"
import delay from "delay"

const chance = new Chance()

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  async function generateMore() {
    while (chance.bool({ likelihood: 95 })) {
      //await delay(1000) // if commented in, you see with curl how the bytes flow in each second
      const randomChunk = chance.string({ length: 16 * 1024 - 1 })
      const shouldContinue = res.write(`${randomChunk}\n`)
      if (!shouldContinue) {
        console.log("back-pressure")
        return res.once("drain", generateMore)
      }
    }
    res.end("\n\n")
  }
  generateMore()
  res.on("finish", () => console.log("All data sent"))
})

server.listen(8080, () => {
  console.log("listening on http://localhost:8080")
})
