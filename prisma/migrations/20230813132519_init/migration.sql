-- CreateTable
CREATE TABLE "Lecture" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lecture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "publishedAt" INTEGER NOT NULL,
    "publisher" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "PDFFile" TEXT NOT NULL,
    "WORDFile" TEXT NOT NULL,
    "HTMLFILE" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blurData" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
