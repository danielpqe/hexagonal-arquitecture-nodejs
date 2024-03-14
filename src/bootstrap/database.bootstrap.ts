import express, { Application } from "express";
import Bootstrap from "./bootstrap.interface";

const PORT = 3000;

class DatabaseBootstrap extends Bootstrap {
  initialize(): Promise<boolean | Error> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
        console.log("Connected!");
      }, 2000);
    });
  }
}

export default DatabaseBootstrap;
