import EventEmitter from "events";

export class MyEmitter extends EventEmitter {
    numberOfEventsEmitted = 0
    // constructor() {
    //     super();
    // }
    
    emitMyEvent(message) {
        this.numberOfEventsEmitted++
        this.emit("myEvent", message, Date.now(), this.numberOfEventsEmitted)
    }
}
