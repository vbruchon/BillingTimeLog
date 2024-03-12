-- DropIndex
DROP INDEX "Customer_SIRET_key";

-- DropIndex
DROP INDEX "Customer_VATNumber_key";

-- DropIndex
DROP INDEX "Customer_email_key";

-- DropIndex
DROP INDEX "Customer_tel_key";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "SIRET" DROP NOT NULL,
ALTER COLUMN "contactFirstName" DROP NOT NULL,
ALTER COLUMN "contactName" DROP NOT NULL,
ALTER COLUMN "country" SET DEFAULT 'France',
ALTER COLUMN "logo" DROP NOT NULL,
ALTER COLUMN "tel" DROP NOT NULL;
