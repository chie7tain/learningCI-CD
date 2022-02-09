import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

// "dev": "nodemon --watch src --watch test --exec \"yarn compile\"",
export default app;
