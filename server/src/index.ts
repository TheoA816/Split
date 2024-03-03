import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import errorHandler from "middleware-http-errors";
import { validateRequest, verifySession } from "./lib/middleware";
import { UserSignupSchema } from "./schema/user.schema";
import { signoutUser, signupUser } from "./functions/auth";
import prisma from "./lib/prisma";
import { readReceipt } from "./functions/ocr";
import { error } from "console";

const app = express();
const port = process.env.PORT ?? 3030;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/read-receipt", readReceipt);

app.post(
  "/auth/signup",
  validateRequest(UserSignupSchema, "body"),
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to POST /auth/signup");
    try {
      const { email, password } = req.body;
      const result: {
        token: string;
        expiredBy: Date;
        userId: number;
      } = await signupUser(email, password);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
);

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

app.post(
  "/add/friend/:billId",
  verifySession,
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to POST /add/friend/:billId");
    try {
      const billId = Number(req.params.billId);

      // check if billId is valid
      const bill = await prisma.bill.findUnique({
        where: { id: billId },
      });

      if (!bill) return res.status(400).json("error lol");

      const { email, owed, paid } = req.body;
      const friend = await prisma.user.findUnique({
        where: { email },
      });

      if (!friend) return res.status(400).json("error lol");

      const updatedBill = await prisma.billToUser.create({
        data: {
          billId: bill.id,
          userId: friend.id,
          owed: owed,
          paid: paid,
        },
      });

      return res.status(200).json(updatedBill);
    } catch (err) {
      next(err);
    }
  }
);

app.post(
  "/add/friend",
  verifySession,
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to POST /add/friend");
    try {
      const currentUserId = Number(req.headers.id);
      const { email } = req.body;
      const targetUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!targetUser) {
        return res.status(400).json("errorrrrr");
      }
      // will add the target user to the current user's friends list
      await prisma.user.update({
        where: {
          id: currentUserId,
        },
        data: {
          friends: {
            connect: {
              id: targetUser.id,
            },
          },
        },
      });
      // add current user as friend to the target user
      await prisma.user.update({
        where: { id: targetUser.id },
        data: {
          friends: {
            connect: { id: currentUserId },
          },
        },
      });
      return res.status(200).json({ message: "Friend added yay" });
    } catch (err) {
      next(err);
    }
  }
);

app.get(
  "/friends",
  verifySession,
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to GET /friends");
    try {
      const friends = await prisma.user.findMany({
        where: {
          id: Number(req.headers.id),
        },
        select: {
          friends: {
            select: {
              email: true,
              name: true,
              profilePicture: true,
            },
          },
        },
        orderBy: {
          name: "asc",
        },
      });
      return res.status(200).json({ friends });
    } catch (err) {
      next(err);
    }
  }
);

app.get(
  "/history",
  verifySession,
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to GET /history");
    try {
      const histories = await prisma.bill.findMany({
        where: {
          userId: Number(req.headers.id),
        },
        select: {
          title: true,
          userId: true,
          completed: true,
          createdAt: true,
          items: {
            select: {
              name: true,
              cost: true,
            },
          },
        },
        orderBy: {
          title: "asc",
        },
      });
      return res.status(200).json({ histories });
    } catch (err) {
      next(err);
    }
  }
);

app.get(
  "/statistics",
  verifySession,
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to GET /statistics");
    try {
      const totalExpenses = await prisma.billToUser.aggregate({
        where: {
          userId: Number(req.headers.id),
        },
        _sum: {
          paid: true,
        },
      });
      const userOwed = await prisma.billToUser.aggregate({
        where: {
          userId: Number(req.headers.id),
        },
        _sum: {
          owed: true,
        },
      });
      const peopleOwed = await prisma.billToUser.aggregate({
        where: {
          bill: {
            userId: Number(req.headers.id),
          },
        },
        _sum: {
          owed: true,
        },
      });
      return res.status(200).json({ totalExpenses, userOwed, peopleOwed });
    } catch (err) {
      next(err);
    }
  }
);

app.get('/user', verifySession, async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to /user");
    try {
        const id = Number(req.headers.id);
        const user = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                email: true,
                name: true,
                profilePicture: true
            }
        });
        return res.status(200).json({ user });
    } catch (err) {
        next(err);
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
