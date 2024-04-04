// Simple http server that returns a JSON object with the following properties

const http = require('http')

var VERSION = 'V5'

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: "Hello World: " + VERSION }))
}
)

process.on('SIGINT', function () {
    process.exit();
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/')
})

