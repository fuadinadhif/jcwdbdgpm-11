import { type Request, type Response } from "express";
import { openai } from "../lib/openai.js";
import { AI_MODEL, AI_SYSTEM_PROMPT } from "../config/constants.js";

export const sendMessage = async (req: Request, res: Response) => {
  const message = req.body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: AI_MODEL,
      messages: [
        { role: "user", content: message },
        { role: "system", content: AI_SYSTEM_PROMPT },
      ],
    });

    res.status(200).json({
      message: completion.choices[0]?.message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed" });
  }
};
