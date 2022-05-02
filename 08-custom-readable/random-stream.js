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

  _read(size) {
    if (this.times == 5) {
      this.push(null)
      return
    }

    const chunk = chance.string({ length: size })
    this.push(chunk, "utf8") // chunk wird in internen Buffer gepusht
    this.emittedBytes += chunk.length
    this.times++
  }
}
