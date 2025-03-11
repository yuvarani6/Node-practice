const eventEmitter = require("events")
//custom events


class CustomEvents extends eventEmitter{
    constructor(){
        super()
        this.greeting = "Hello"
    }

    greet(name){
       this.emit('greeting', `${this.greeting}, ${name}`)
    }
}


const firstCustomEvent = new CustomEvents

firstCustomEvent.on('greeting', (input)=>{
    console.log(`Greetings from : `, input)
})

firstCustomEvent.greet("yuvaKrish")