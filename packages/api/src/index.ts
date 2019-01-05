import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";

createConnection()
  .then(async (connection) => {
    const port = process.env.port || 3000;
    const server = express();

    server.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(`Something went wrong: ${error}`);
  });
