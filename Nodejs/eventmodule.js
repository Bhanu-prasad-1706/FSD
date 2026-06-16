const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js Events.`);
});
emitter.on('bye', () => {
    console.log('Goodbye! See you again.');
});

console.log('Program Started');
emitter.emit('greet', 'Bhanu');
emitter.emit('bye');
console.log('Program Ended');