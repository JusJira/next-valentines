"use server";

import { db } from "@/lib/db";
import { formSchema } from "@/lib/validation";
import { customAlphabet } from "nanoid";
import { ZodError, z } from "zod";
import { gift } from "@/db/schema";

type Inputs = z.infer<typeof formSchema>;

const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  4
);

export async function addData(data: Inputs) {
  const { sender, recipient, message } = formSchema.parse(data);
  const id = nanoid();
  await db
    .insert(gift)
    .values({ id: id, from: sender, to: recipient, msg: message });
  const url = process.env.WEBSITE_URL + "/" + id;

  return { url, id, recipient };
}
