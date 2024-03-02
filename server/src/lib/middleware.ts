import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import jwt from "jsonwebtoken";
import getHash from "./hash";
import prisma from "./prisma";

export const validateRequest = (
  schema: ZodSchema,
  property: "body" | "query"
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[property]);
    if (!result.success) {
      console.log("Invalid request was made");
      return res.status(400).json({
        error: "Invalid request was made",
        data: req[property],
      });
    }
    next();
  };
};

export const verifySession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secret = process.env.JWT_SECRET as string;
  const { authorization: token } = req.headers;
  const id = Number(req.headers.id);

  if (!token || !(token as string).startsWith("Bearer") || !id) {
    return res.status(403).json({
      error: "Unauthorised",
    });
  }

  const cleanedToken = token.split(" ")[1];
  const tokenExists = await prisma.token.findFirst({
    where: {
      token: getHash(cleanedToken as string),
    },
  });

  try {
    jwt.verify(cleanedToken as string, secret);
    if (!tokenExists || tokenExists.userId !== id) {
      return res.status(403).json({ message: "Invalid Token" });
    }
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      if (tokenExists)
        await prisma.token.delete({
          where: {
            token: getHash(cleanedToken as string),
          },
        });
      return res.status(403).json({ message: "Expired token" });
    }
    return res.status(403).json({ message: "Invalid Token" });
  }
  next();
};