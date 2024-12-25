-- CreateTable
CREATE TABLE "Problem" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "solution" TEXT NOT NULL,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Problem_number_key" ON "Problem"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Problem_url_key" ON "Problem"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Problem_title_key" ON "Problem"("title");
