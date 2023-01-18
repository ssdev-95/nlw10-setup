import { MigrationInterface, QueryRunner } from "typeorm";

export class removeRelations1674081523796 implements MigrationInterface {
    name = 'removeRelations1674081523796'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_day_habits" ("id" varchar PRIMARY KEY NOT NULL, "day_id" varchar NOT NULL, "habit_id" varchar NOT NULL, CONSTRAINT "UQ_0276a3c8612842972c0eaaa567a" UNIQUE ("day_id"), CONSTRAINT "UQ_1308bd99582df4347ff1f60fce1" UNIQUE ("habit_id"))`);
        await queryRunner.query(`INSERT INTO "temporary_day_habits"("id", "day_id", "habit_id") SELECT "id", "day_id", "habit_id" FROM "day_habits"`);
        await queryRunner.query(`DROP TABLE "day_habits"`);
        await queryRunner.query(`ALTER TABLE "temporary_day_habits" RENAME TO "day_habits"`);
        await queryRunner.query(`CREATE TABLE "temporary_habit_week_days" ("id" varchar PRIMARY KEY NOT NULL, "habit_id" varchar NOT NULL, "week_day" integer NOT NULL, CONSTRAINT "UQ_4fb09eb8a52c9a6494d53f6ded1" UNIQUE ("habit_id"), CONSTRAINT "UQ_55cda4242c7bb33c2d0c3d82784" UNIQUE ("week_day"))`);
        await queryRunner.query(`INSERT INTO "temporary_habit_week_days"("id", "habit_id", "week_day") SELECT "id", "habit_id", "week_day" FROM "habit_week_days"`);
        await queryRunner.query(`DROP TABLE "habit_week_days"`);
        await queryRunner.query(`ALTER TABLE "temporary_habit_week_days" RENAME TO "habit_week_days"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "habit_week_days" RENAME TO "temporary_habit_week_days"`);
        await queryRunner.query(`CREATE TABLE "habit_week_days" ("id" varchar PRIMARY KEY NOT NULL, "habit_id" varchar NOT NULL, "week_day" integer NOT NULL, CONSTRAINT "UQ_4fb09eb8a52c9a6494d53f6ded1" UNIQUE ("habit_id"), CONSTRAINT "UQ_55cda4242c7bb33c2d0c3d82784" UNIQUE ("week_day"), CONSTRAINT "FK_4fb09eb8a52c9a6494d53f6ded1" FOREIGN KEY ("habit_id") REFERENCES "habits" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "habit_week_days"("id", "habit_id", "week_day") SELECT "id", "habit_id", "week_day" FROM "temporary_habit_week_days"`);
        await queryRunner.query(`DROP TABLE "temporary_habit_week_days"`);
        await queryRunner.query(`ALTER TABLE "day_habits" RENAME TO "temporary_day_habits"`);
        await queryRunner.query(`CREATE TABLE "day_habits" ("id" varchar PRIMARY KEY NOT NULL, "day_id" varchar NOT NULL, "habit_id" varchar NOT NULL, CONSTRAINT "UQ_0276a3c8612842972c0eaaa567a" UNIQUE ("day_id"), CONSTRAINT "UQ_1308bd99582df4347ff1f60fce1" UNIQUE ("habit_id"), CONSTRAINT "FK_1308bd99582df4347ff1f60fce1" FOREIGN KEY ("habit_id") REFERENCES "habits" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_0276a3c8612842972c0eaaa567a" FOREIGN KEY ("day_id") REFERENCES "days" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "day_habits"("id", "day_id", "habit_id") SELECT "id", "day_id", "habit_id" FROM "temporary_day_habits"`);
        await queryRunner.query(`DROP TABLE "temporary_day_habits"`);
    }

}
