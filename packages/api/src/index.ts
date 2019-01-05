import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
// import { createConnection } from "typeorm";

const port = process.env.PORT;
const server = express();

server.use(helmet());
server.use(bodyParser.json());

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

/*
createConnection()
  .then(async (connection) => {
    const port = process.env.port;
    const server = express();

    server.use(helmet());
    server.use(bodyParser.json());

    server.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(`Something went wrong: ${error}`);
  });
*/
