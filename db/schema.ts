import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { customAlphabet } from "nanoid";

export const gift = sqliteTable('gift', {
    id: text('id').primaryKey(),
    from: text('from'),
    to: text('to'),
    msg: text('msg')
  });
