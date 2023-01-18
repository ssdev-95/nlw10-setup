import { MigrationInterface, QueryRunner } from "typeorm";

export class createRestOfTables1673999045997 implements MigrationInterface {
    name = 'createRestOfTables1673999045997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "days" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL, CONSTRAINT "UQ_98537429ff3c3457f4bfebe466f" UNIQUE ("date"))`);
        await queryRunner.query(`CREATE TABLE "day_habits" ("id" varchar PRIMARY KEY NOT NULL, "day_id" varchar NOT NULL, "habit_id" varchar NOT NULL, CONSTRAINT "UQ_0276a3c8612842972c0eaaa567a" UNIQUE ("day_id"), CONSTRAINT "UQ_1308bd99582df4347ff1f60fce1" UNIQUE ("habit_id"))`);
        await queryRunner.query(`CREATE TABLE "habit_week_days" ("id" varchar PRIMARY KEY NOT NULL, "habit_id" varchar NOT NULL, "week_day" integer NOT NULL, CONSTRAINT "UQ_4fb09eb8a52c9a6494d53f6ded1" UNIQUE ("habit_id"), CONSTRAINT "UQ_55cda4242c7bb33c2d0c3d82784" UNIQUE ("week_day"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "habit_week_days"`);
        await queryRunner.query(`DROP TABLE "day_habits"`);
        await queryRunner.query(`DROP TABLE "days"`);
    }

}
