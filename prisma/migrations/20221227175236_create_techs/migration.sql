-- CreateTable
CREATE TABLE "techs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "techs_pkey" PRIMARY KEY ("id")
);
