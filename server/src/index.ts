import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import errorHandler from "middleware-http-errors";
import { validateRequest, verifySession } from "./lib/middleware";
import { UserSignupSchema } from "./schema/user.schema";
<<<<<<< HEAD
import { loginUser } from "./functions/auth";
=======
import { signoutUser, signupUser } from "./functions/auth";
>>>>>>> 4992bac26de60cbd135111fc09a411afbf1bb290
import prisma from "./lib/prisma";

const app = express();
const port = process.env.PORT ?? 3030;

<<<<<<< HEAD
type UpdateUserData = {
  name?: string;
  profilePicture?: string;
  password?: string;
};

=======
>>>>>>> 4992bac26de60cbd135111fc09a411afbf1bb290
app.get("/", (req, res) => {
  res.send("Hello World!");
});

<<<<<<< HEAD
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

app.post("/create-bill", async (req, res) => {
  try {
    const { title, userId, items } = req.body;
    const token = req.headers.authorization;

    if (!token) {
      return res.status(403).json({ error: "Unauthorized access" });
    }

    const bill = await prisma.bill.create({
      data: {
        title: title,
        completed: false,
        createdAt: new Date(),
        issuedBy: { connect: { id: userId } },
        items: {
          create: [...items],
        },
      },
    });

    await prisma.billToUser.create({
      data: {
        billId: bill.id,
        userId: userId,
      },
    });

    return res.json({ billId: bill.id });
  } catch (err) {
    if (err instanceof Error) {
      return res
        .status(500)
        .json({ error: "Internal Server Error" + err.message });
    }
    return res.status(500).json({ error: err });
  }
});

=======
>>>>>>> 4992bac26de60cbd135111fc09a411afbf1bb290
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
<<<<<<< HEAD
      } = await loginUser(email, password);
=======
      } = await signupUser(username, password);
>>>>>>> 4992bac26de60cbd135111fc09a411afbf1bb290
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
<<<<<<< HEAD
  },
);
=======
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
      return { friends };
    } catch (err) {
      next(err);
    }
  }
);

app.get("/history", verifySession, async (req: Request, res: Response, next: NextFunction) => {
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
              cost: true
            }
          }
        },
        orderBy: {
          title: "asc",
        },
      });
      return { histories };
    } catch (err) {
      next(err);
    }
});

app.get("/statistics", verifySession, async (req: Request, res: Response, next: NextFunction) => {
    console.log("Responding to GET /statistics");
    try {
      const totalExpenses = await prisma.billToUser.aggregate({
        where: {
          userId: Number(req.headers.id),
        },
        _sum: {
          paid: true
        }
      });
      const userOwed = await prisma.billToUser.aggregate({
        where: {
          userId: Number(req.headers.id),
        },
        _sum: {
          owed: true
        }
      });
      const peopleOwed = await prisma.billToUser.aggregate({
        where: {
          bill: {
            userId: Number(req.headers.id)
          }
        },
        _sum: {
          owed: true
        }
      });
      return { totalExpenses, userOwed, peopleOwed };
    } catch (err) {
      next(err);
    }

});
>>>>>>> 4992bac26de60cbd135111fc09a411afbf1bb290

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
