const { log } = require("console");
const EventEmitter=require("events")

const eventEmitter = new EventEmitter()

const subscribemessage = (channelname) => {
    console.log(`Thanks for subscribibg to ${channelname}`);
}


eventEmitter.addListener("subscribe",subscribemessage)

console.log("calling events listener before removing the event");

eventEmitter.emit("subscribe","physics wallah")

console.log("Calling event listener after removing the event");

eventEmitter.removeListener("subscribe",subscribemessage)

eventEmitter.emit("subscribe","college wallah")
