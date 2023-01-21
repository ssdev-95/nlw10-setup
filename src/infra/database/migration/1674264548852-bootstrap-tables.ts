import { MigrationInterface, QueryRunner } from 'typeorm'

export class bootstrapTables1674264548852 implements MigrationInterface {
  name = 'bootstrapTables1674264548852'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "day_habits" ("id" varchar PRIMARY KEY NOT NULL, "day_id" varchar NOT NULL, "habit_id" varchar NOT NULL, CONSTRAINT "UQ_17fc413afe94fcdcaf6ec9a8fc4" UNIQUE ("habit_id", "day_id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "days" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL, CONSTRAINT "UQ_98537429ff3c3457f4bfebe466f" UNIQUE ("date"))`
    )
    await queryRunner.query(
      `CREATE TABLE "habit_week_days" ("id" varchar PRIMARY KEY NOT NULL, "week_day" integer NOT NULL, "habit_id" varchar NOT NULL, CONSTRAINT "UQ_ef9b6322f23db65e4ac52995e48" UNIQUE ("habit_id", "week_day"))`
    )
    await queryRunner.query(
      `CREATE TABLE "habits" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "created_at" datetime NOT NULL)`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "habits"`)
    await queryRunner.query(`DROP TABLE "habit_week_days"`)
    await queryRunner.query(`DROP TABLE "days"`)
    await queryRunner.query(`DROP TABLE "day_habits"`)
  }
}
