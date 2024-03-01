/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceStatus` on the `HourEntry` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tel]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[SIRET]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[VATNumber]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tel]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[SIRET]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[VATNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `SIRET` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactFirstName` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactName` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('pending', 'paid', 'overdue');

-- CreateEnum
CREATE TYPE "HourEntryStatus" AS ENUM ('unbilled', 'billed');

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "emailVerified",
DROP COLUMN "name",
ADD COLUMN     "SIRET" TEXT NOT NULL,
ADD COLUMN     "VATNumber" TEXT,
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "contactFirstName" TEXT NOT NULL,
ADD COLUMN     "contactName" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "emailVerifiedAt" TIMESTAMP(3),
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "tel" TEXT,
ADD COLUMN     "webSite" TEXT;

-- AlterTable
ALTER TABLE "HourEntry" DROP COLUMN "invoiceStatus",
ADD COLUMN     "invoiceId" TEXT,
ADD COLUMN     "status" "HourEntryStatus" NOT NULL DEFAULT 'unbilled',
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "SIRET" TEXT,
ADD COLUMN     "VATNumber" TEXT,
ADD COLUMN     "activityCode" TEXT,
ADD COLUMN     "address" TEXT,
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "tel" TEXT,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "invoiceStatus" "InvoiceStatus" NOT NULL DEFAULT 'pending',
    "paymentMethod" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "clientId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "invoiceDate" TIMESTAMP(3),
    "dueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_tel_key" ON "Customer"("tel");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_SIRET_key" ON "Customer"("SIRET");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_VATNumber_key" ON "Customer"("VATNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_tel_key" ON "User"("tel");

-- CreateIndex
CREATE UNIQUE INDEX "User_SIRET_key" ON "User"("SIRET");

-- CreateIndex
CREATE UNIQUE INDEX "User_VATNumber_key" ON "User"("VATNumber");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HourEntry" ADD CONSTRAINT "HourEntry_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
