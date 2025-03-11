const eventEmitter = require("events")

const firstEvent = new eventEmitter

firstEvent.on('greet', (name)=>{
    console.log(`Hello, ${name}!`)
})

firstEvent.emit('greet', 'yuva');
