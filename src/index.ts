// import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";

// const serverBootstrap = new ServerBootstrap();
const databaseBootstrap = new DatabaseBootstrap();

//   try {
// await serverBootstrap.initialize();
const app = async () => {
  console.log("Starting ...");

  await databaseBootstrap.initialize();
  console.log("Application is running");
  //   } catch (error) {
  //     console.error(error);
  //   }
};

app();
