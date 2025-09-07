import * as t from "drizzle-orm/pg-core";
import { pgEnum, pgTable, varchar, uuid, timestamp } from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().notNull(),
    firstName: varchar("first_name", { length: 256 }).notNull(),
    lastName: varchar("last_name", { length: 256 }).notNull(),
    email: varchar("email").notNull().unique(),
    phone: varchar("phone", { length: 50 }),
    passwordHash: varchar("password_hash", { length: 256 }).notNull(),
    role: rolesEnum().default("guest").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [t.uniqueIndex("email_idx").on(table.email)]
);
