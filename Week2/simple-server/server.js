const http = require("http");

const HOSTNAME = 'localhost';
const PORT = 8000;

// Add Request Listener to the server
// const requestListener = function (request, response) {
//     response.writeHead(200); // Status code 200 = OK
//     response.write("Hello World");
//     response.end();

// };

function requestHandler(request, response){
    console.log(request)
    response.end("Hello from the server")
}



// Create the server
const server = http.createServer(requestHandler)
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
})