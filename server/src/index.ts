import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import errorHandler from "middleware-http-errors";
import { validateRequest, verifySession } from "./lib/middleware";
import { UserSignupSchema } from "./schema/user.schema";
import { signoutUser, signupUser } from "./functions/auth";

const app = express();
const port = process.env.PORT ?? 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/auth/signup', validateRequest(UserSignupSchema, "body"), async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to POST /auth/login");
    try {
      const { username, password } = req.body;
      const result: {
        token: string;
        expiredBy: Date;
        userId: number;
      } = await signupUser(username, password);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
});

app.post(
  "/auth/signout",
  verifySession,
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to POST /auth/signout");
    try {
      const token = req.headers["authorization"]?.split(" ")[1];
      const result: Record<never, never> = await signoutUser(token as string);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});