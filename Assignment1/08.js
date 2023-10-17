const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

const subscribeMessage = (channelname) => {
    console.log(`Thanks for Subscribing to ${channelname}`);
}


eventEmitter.addListener("subscribe",subscribeMessage)


eventEmitter.emit("subscribe","cg wallah")