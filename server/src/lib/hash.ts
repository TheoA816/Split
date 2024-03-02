import crypto from "crypto";

export default function getHash(plaintext: string) {
  return crypto.createHash("sha256").update(plaintext).digest("hex");
}