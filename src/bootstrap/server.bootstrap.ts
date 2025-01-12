import * as http from "http";
import app from "../app";
import { IBootstrap } from "./bootstrap.interface";

export default class ServerBootstrap implements IBootstrap {
  initialize(): Promise<boolean | Error> {
    return new Promise((res, rej) => {
      const server = http.createServer();

      server
        .listen(3000)
        .on("listening", () => {
          res(true);
          console.log("Server is running on port 3000");
        })
        .on("error", rej);
    });
  }
}
