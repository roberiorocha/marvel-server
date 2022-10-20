'use strict'

import * as dotenv from 'dotenv'

dotenv.config()

console.log(process.env.MARVEL_API_BASE);


import http from 'http';
import app from "./app";
import path from "path";

console.log(
  path.resolve(process.cwd(), "src/db/db.json"),
  (process.env.NODE_ENV = process.env.NODE_ENV || "development")
);

console.log(process.cwd());

const server = http.createServer(app);

/**
 * start server
 */
setImmediate(() => {
  server.listen(3000, "0.0.0.0", () => {
    console.log('Express server listening on %d, in %s mode');
  });  
});