import { Readable } from "stream"
import Chance from "chance"
import delay from "delay"

const chance = new Chance()

export class RandomStream extends Readable {
  times = 0
  constructor(options) {
    super(options)
    this.emittedBytes = 0
    this.times = 0
  }

  async _read() {
    if (this.times == 5) {
      this.push(null)
      return
    }

    await delay(1000)
    const chunk = chance.string({ length: 10 })
    this.push(chunk, "utf8") // chunk wird in internen Buffer gepusht
    this.emittedBytes += chunk.length
    this.times++
  }
}
