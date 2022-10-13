'use strict'

import * as dotenv from 'dotenv'
dotenv.config()

console.log(process.env.MARVEL_API_BASE);

import http from 'http';
import app from "./app";

const server = http.createServer(app);

/**
 * start server
 */
setImmediate(() => {
  server.listen(3000, "0.0.0.0", () => {
    console.log('Express server listening on %d, in %s mode');
  });  
});