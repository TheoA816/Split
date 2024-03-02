import crypto from "crypto";
import { Request, Response } from "express";

const clientId = "vrfbFlV6l4Ert25zpmZUrrWSlbLrpIPNcAVLrUP";
const username = "hsuputra";
const apiKey = "c286d028ddb8519dc093dacf722a98cb";

export const readReceipt = async (req: Request, res: Response) => {
  try {
    const data = JSON.stringify({
      file_url:
        "https://veryfi-testing-public.s3.us-west-2.amazonaws.com/receipt.jpg",
    });

    const url = "https://api.veryfi.com/api/v8/partner/documents";
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "CLIENT-ID": "vrfbFlV6l4Ert25zpmZUrrWSlbLrpIPNcAVLrUP",
      AUTHORIZATION: "apikey hsuputra:c286d028ddb8519dc093dacf722a98cb",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: data,
    });
    const ocrData = await response.json();
    return res.json({ data: ocrData });
  } catch (err) {
    if (err instanceof Error) {
      return res
        .status(500)
        .json({ error: "Internal Server Error" + err.message });
    }
    return res.status(500).json({ error: "Internal Server Error" + err });
  }
};
