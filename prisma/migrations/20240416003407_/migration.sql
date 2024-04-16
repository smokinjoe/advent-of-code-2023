/*
  Warnings:

  - Added the required column `order` to the `DayInput` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `DayInput` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DayInput" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "order" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DayInput_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DayInput" ("content", "dayId", "id", "type") SELECT "content", "dayId", "id", "type" FROM "DayInput";
DROP TABLE "DayInput";
ALTER TABLE "new_DayInput" RENAME TO "DayInput";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
