import { MyEmitter } from "./event-emitter.js"

const emitter = new MyEmitter()

emitter.on("myEvent", (message, date, numberOfEventsEmitted) => {
    console.log("subscriber received following data:\n", message, date, numberOfEventsEmitted)
})

emitter.emitMyEvent("this is a message")

emitter.emitMyEvent("this is another message")