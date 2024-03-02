import prisma from "../lib/prisma";
import getHash from "../lib/hash";
import HttpError from "http-errors";
import { generateToken } from "../lib/token";

export const loginUser = async (
  email: string,
  password: string
): Promise<{ token: string; expiredBy: Date; userId: number }> => {
  // Check if email or password is valid
  if (!email || !password) {
    console.log("Data provided is of invalid format");
    throw HttpError(400, "Invalid credentials");
  }

  // Get user if exists
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  // User with the given email doesn't exists
  // or password doesn't match
  if (!user || getHash(password) !== user.password) {
    console.log("Invalid credentials.");
    throw HttpError(400, "Credentials invalid");
  }

  // Generate new token
  const { token: newGeneratedToken, expiredBy } = generateToken(user.id);
  await prisma.token.create({
    data: {
      token: getHash(newGeneratedToken),
      userId: user.id,
      expiredBy,
    },
  });
  console.log(`User with email ${email} logged in.`);

  return {
    token: `Bearer ${newGeneratedToken}`,
    expiredBy,
    userId: user.id,
  };
};