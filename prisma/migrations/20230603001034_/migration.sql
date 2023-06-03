-- CreateTable
CREATE TABLE "_CategoryInheritance" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryInheritance_AB_unique" ON "_CategoryInheritance"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryInheritance_B_index" ON "_CategoryInheritance"("B");

-- AddForeignKey
ALTER TABLE "_CategoryInheritance" ADD CONSTRAINT "_CategoryInheritance_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryInheritance" ADD CONSTRAINT "_CategoryInheritance_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
