-- CreateTable
CREATE TABLE "users_techs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "tech_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_techs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_techs" ADD CONSTRAINT "users_techs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_techs" ADD CONSTRAINT "users_techs_tech_id_fkey" FOREIGN KEY ("tech_id") REFERENCES "techs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
