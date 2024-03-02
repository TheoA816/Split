import { Request, Response } from "express";

export const readReceipt = async (req: Request, res: Response) => {
  try {
    const { receiptUrl } = req.body;

    const data = JSON.stringify({
      file_url: receiptUrl,
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
