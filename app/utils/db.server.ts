import pkg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const { Pool } = pkg;

const connectionString = `${process.env.DATABASE_URL}`;

let db: PrismaClient;

declare global {
  // eslint-disable-next-line no-var
  var __db__: PrismaClient;
}

// This is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
// In production, we'll have a single connection to the DB.
if (process.env.NODE_ENV === "production") {
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  db = new PrismaClient({ adapter });
} else {
  if (!global.__db__) {
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    global.__db__ = new PrismaClient({ adapter });
  }
  db = global.__db__;
  db.$connect();
}

export { db };
