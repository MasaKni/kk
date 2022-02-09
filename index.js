
import Server from './src/server.js';

const server = new Server();

server.runServer(process.env.PORT || '3000')

