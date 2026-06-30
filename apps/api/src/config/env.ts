import "dotenv/config";
import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(4000),
  DATABASE_URL: z.string().default("postgresql://postgres:postgres@localhost:5432/skyline"),
  JWT_SECRET: z.string().default("development-only-secret"),
  CLIENT_ORIGIN: z.string().default("http://localhost:5173")
});

export const env = EnvSchema.parse(process.env);
