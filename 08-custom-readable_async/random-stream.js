import { Readable } from "stream"
import Chance from "chance"
import delay from "delay"

const chance = new Chance()

export class RandomStream extends Readable {
  times
  constructor(options) {
    super(options)
    this.emittedBytes = 0
    this.times = 0
  }

  // Aus der Doku: Achtung, es geht um read, nicht um _read!

  // The `readable.read()` method should only be called on `Readable` streams
  // operating in paused mode. In flowing mode, `readable.read()` is called
  // automatically until the internal buffer is fully drained.

  // synchron geht das, aber asynchron wären die Promises nicht aufgelöst

  // ansonsten wird _read automatisch aufgerufen (siehe index.js)
  async _read(size) {
    if (this.times == 5) {
      this.push(null)
      return
    }
    // setTimeout(() => {
    await delay(500)
    const chunk = chance.string({ length: size })
    this.push(chunk, "utf8") // chunk wird in internen Buffer gepusht
    this.emittedBytes += chunk.length
    this.times++
    // }, 500);
  }
}
