import { EventEmitter } from 'events'

class DB extends EventEmitter {
  connected = false
  commandsQueue = []

  async query (queryString) {
    if (!this.connected) {
      console.log(`Request queued: ${queryString}`)

      return new Promise((resolve, reject) => {
        const command = () => {
          this.query(queryString) // query nochmal aufrufen; an dieser Stelle ist immer connected = true
            .then(resolve, reject) // resolve, reject von oben reinreichen; dadurch werden diese erst ausgeführt, wenn query wirklich ausgeführt wurde
        }                          // und auch erst in diesem Moment der Promise aufgelöst
        this.commandsQueue.push(command)
        return
      })
    }
    // hier würde Query ausgeführt
    console.log(`Query executed: ${queryString}`)
  }

  connect () {
    // simulate the delay of the connection
    setTimeout(() => {
      this.connected = true
      this.emit('connected')
      this.commandsQueue.forEach(command => command())
      this.commandsQueue = []
    }, 1500)
  }
}

export const db = new DB()
