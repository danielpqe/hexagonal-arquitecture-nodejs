import http from "http";
import app from "../app";
import Bootstrap from "./bootstrap";

export default class ServerBootstrap extends Bootstrap {
  initialize(): Promise<boolean | Error> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(app);
      const PORT = process.env.PORT || 3000;
      server
        .listen(PORT)
        .on("listening", () => {
          resolve(true);
          console.log(`Server is running on port ${PORT}`);
        })
        .on("error", reject);
    });
  }
}
