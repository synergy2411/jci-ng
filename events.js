const {EventEmitter} = require("events")
const emitter = new EventEmitter();

// Subscribe
emitter.on("Foo", (result) => {
    console.log("Foo event traiggered ", result.data)
})

// Publish
emitter.emit("Foo", {data : "SUCCESS"})