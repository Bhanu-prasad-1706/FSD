const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const readStream = fs.createReadStream('index.html');

    readStream.on('data', (chunk) => {
        res.write(chunk);
    });

    readStream.on('end', () => {
        res.end();
    });

}).listen(3000);

console.log('Server running on port 3000');