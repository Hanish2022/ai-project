const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log('Received:', message);
    socket.send(`Echo: ${message}`);
  });

  socket.on('close', () => console.log('Client disconnected'));
});
