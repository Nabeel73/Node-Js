/*function sayhello() {
    console.log("hello");
}
sayhello("Nabeel Ahmed");

var message = "";
console.log(global.message);

console.log(module);

//require('./logger')

var logger = require("./logger");

//var logger = require("./logger");
//console.log("logger");
//logger = 1;
//logger.log("message");
logger("message");

const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);*/

/*const os = require('os');
var totalMemory = os.totalmen();
var freeMemory = os.freemem();

//console.log("Total Memory:" + totalMemory);
//Template String 
//ES6 / ES2015 /Emca Script 6 

console.log("Total Memory:${totalMemory}");
console.log("Free Memory:${freeMemory}");*/

/*const fs = require("fs");
//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('$', function(error, files) {
    if (error) console.log(error, files);
    else console.log("Result", files);
});*/
/*
const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//const emitter = new EventEmitter();

//Register a listener
logger.on("message logged", (arg) => {
    //emitter.on("message logged", function(arg) {
    console.log("listener Called", arg);
});
//Raise an Event 
//emitter.emit("message logged", { id: 1, url: "http://" });
//Raise logging {data : Message}
logger.log('Message');*/


// Http class