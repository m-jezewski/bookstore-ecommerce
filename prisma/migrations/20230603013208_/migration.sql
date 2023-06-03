/*
  Warnings:

  - You are about to drop the `_CategoryInheritance` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `parentCategoryId` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryInheritance" DROP CONSTRAINT "_CategoryInheritance_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryInheritance" DROP CONSTRAINT "_CategoryInheritance_B_fkey";

-- AlterTable
ALTER TABLE "ProductCategory" ADD COLUMN     "parentCategoryId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CategoryInheritance";

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
