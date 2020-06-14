var events = require('events')
var eventEmitter = new events.EventEmitter();

//create and event handleer 
var myEventHandler = function () {
	console.log('I hear a scream!');
}

//assign the event handler to an event
eventEmitter.on('scream', myEventHandler); 

//fire the 'scream' event
eventEmitter.emit('scream');