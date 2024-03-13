-- AlterTable
ALTER TABLE "User" ADD COLUMN     "city" TEXT,
ADD COLUMN     "zipCode" TEXT,
ALTER COLUMN "country" SET DEFAULT 'France';
