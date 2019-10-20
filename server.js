const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Our Local Server Start');
        res.end();
    }

    if (req.url === '/university/course') {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});

/*server.on('connection', (socket) => {
    console.log('New Connection');
});*/

server.listen(1000);

console.log('Listening on port 1000...');