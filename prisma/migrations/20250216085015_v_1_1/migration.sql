-- DropForeignKey
ALTER TABLE "poolKeranjangUser" DROP CONSTRAINT "poolKeranjangUser_keranjangId_fkey";

-- AlterTable
ALTER TABLE "poolKeranjangUser" ALTER COLUMN "keranjangId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "poolKeranjangUser" ADD CONSTRAINT "poolKeranjangUser_keranjangId_fkey" FOREIGN KEY ("keranjangId") REFERENCES "Keranjang"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
