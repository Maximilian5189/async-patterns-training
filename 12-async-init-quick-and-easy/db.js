import { EventEmitter } from "events"

class DB extends EventEmitter {
  connected = false

  connect() {
    setTimeout(() => {
      this.connected = true
      this.emit("connected")
    }, 1500)
  }

  async query(queryString) {
    if (!this.connected) {
      throw new Error("Not connected yet")
    }
    console.log("Query executed:", queryString)
  }
}

export const db = new DB()
