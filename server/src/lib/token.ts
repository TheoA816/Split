import jwt from "jsonwebtoken";
import getHash from "./hash";
import prisma from "./prisma";

export const generateToken = (userId: number) => {
  return {
    token: jwt.sign({ userId: userId }, process.env.JWT_SECRET as string, {
      expiresIn: "24h",
    }),
    expiredBy: new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
  };
};

export const verifyToken = async (
  token: string | undefined,
  userId: number | undefined,
) => {
  const secret = process.env.JWT_SECRET as string;

  if (!token || !(token as string).startsWith("Bearer") || !userId) {
    return false;
  }

  const cleanedToken = token.split(" ")[1];
  const tokenExists = await prisma.token.findFirst({
    where: {
      token: getHash(cleanedToken as string),
    },
  });
  try {
    jwt.verify(cleanedToken as string, secret);
    if (!tokenExists || tokenExists.userId !== userId) {
      return false;
    }
  } catch (err: any) {
    if (err.name === "TokenExpiredError" && tokenExists) {
      await prisma.token.delete({
        where: {
          token: getHash(cleanedToken as string),
        },
      });
    }
    return false;
  }
  return true;
};
