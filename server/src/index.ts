import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import errorHandler from "middleware-http-errors";
import { validateRequest } from "./lib/middleware";
import { UserSignupSchema } from "./schema/user.schema";
import { loginUser } from "./functions/auth";
import prisma from "./lib/prisma";

const app = express();
const port = process.env.PORT ?? 3000;

type UpdateUserData = {
  name?: string;
  profilePicture?: string;
  password?: string;
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/update-user", async (req, res) => {
  try {
    const { name, profilePicture, password, id } = req.body;
    const token = req.headers.authorization;

    if (!token) {
      return res.status(403).json({ error: "Unauthorized access" });
    }

    const updateData: UpdateUserData = {};

    if (name) {
      updateData.name = name;
    }

    if (profilePicture) {
      updateData.profilePicture = profilePicture;
    }

    if (password) {
      updateData.password = password;
    }

    await prisma.user.update({
      where: {
        id: id,
      },
      data: updateData,
    });

    return res.json({ message: "User profile updated" });
  } catch (err) {
    if (err instanceof Error) {
      return res
        .status(500)
        .json({ error: "Internal Server Error" + err.message });
    }
    return res.status(500).json({ error: err });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post(
  "/auth/signup",
  validateRequest(UserSignupSchema, "body"),
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to POST /auth/login");
    try {
      const { email, password } = req.body;
      const result: {
        token: string;
        expiredBy: Date;
        userId: number;
      } = await loginUser(email, password);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
