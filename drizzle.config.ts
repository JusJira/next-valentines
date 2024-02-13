import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });


export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_TOKEN as string,
  },
} satisfies Config;
