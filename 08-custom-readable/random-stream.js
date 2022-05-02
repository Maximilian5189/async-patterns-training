import { Readable } from "stream"
import Chance from "chance"

const chance = new Chance()

export class RandomStream extends Readable {
  times
  constructor(options) {
    super(options)
    this.emittedBytes = 0
    this.times = 0
  }

  _read() {
    if (this.times == 5) {
      this.push(null)
      return
    }

    const chunk = chance.string({ length: 10 })
    this.push(chunk, "utf8")
    this.emittedBytes += chunk.length
    this.times++
  }
}
