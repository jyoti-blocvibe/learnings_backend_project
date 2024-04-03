const http = require('http');
const app = require('./app')
const server = http.createServer(app);

server.listen(3000,console.log(' afdshdhf hfgjgg ih server is running'));


// server.close((err) => {
//     if (err) {
//       console.error('Error stopping server:', err);
//     } else {
//       console.log('Server stopped successfully');
//     }
//   });
