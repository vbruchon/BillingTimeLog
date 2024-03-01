/*
  Warnings:

  - Made the column `companyName` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `logo` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tel` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "companyName" SET NOT NULL,
ALTER COLUMN "logo" SET NOT NULL,
ALTER COLUMN "tel" SET NOT NULL;
