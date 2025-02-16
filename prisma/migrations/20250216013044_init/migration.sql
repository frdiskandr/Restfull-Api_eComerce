-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" VARCHAR NOT NULL,
    "password" TEXT NOT NULL,
    "role" BOOLEAN NOT NULL DEFAULT false,
    "session" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Profile" (
    "username" TEXT NOT NULL,
    "image" TEXT DEFAULT '',
    "description" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "Keranjang" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "poolKeranjangUser" (
    "id" SERIAL NOT NULL,
    "keranjangId" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Store" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Keranjang_id_key" ON "Keranjang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Keranjang_userId_key" ON "Keranjang"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "poolKeranjangUser_id_key" ON "poolKeranjangUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Store_id_key" ON "Store"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Store_userId_key" ON "Store"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Keranjang" ADD CONSTRAINT "Keranjang_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poolKeranjangUser" ADD CONSTRAINT "poolKeranjangUser_keranjangId_fkey" FOREIGN KEY ("keranjangId") REFERENCES "Keranjang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
