const net = require('net');

const PORT = process.env.PORT || 9000;

const server = net.createServer((socket) => {
  console.log('Client connected');
  socket.write('Welcome to the MCP server!\n');
  socket.on('data', (data) => {
    const message = data.toString().trim();
    console.log(`Received: ${message}`);
    socket.write(`Echo: ${message}\n`);
  });
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`MCP server listening on port ${PORT}`);
});
