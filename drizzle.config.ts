import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./data-layer/schemas",
  out: "./supabase/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  introspect: {
    casing: "camel",
  },
  strict: true,
  verbose: true,
});
