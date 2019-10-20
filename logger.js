const EventEmitter = require("events");
//const emitter = new EventEmitter();
//console.log(__filename);
//console.log(__dirname);
//var x = ;

var url = "http://mylogger.io/log";
class Logger extends EventEmitter {
    log(message) {
        //function log(message) {
        //Send an HTTP request
        console.log(message);
        this.emit("message logged", { id: 1, url: "http://" });
    }
}
module.exports = Logger;
//module.exports.log = log;
//module.exports.url = url;