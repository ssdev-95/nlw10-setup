import { MigrationInterface, QueryRunner } from "typeorm";

export class bootstrapDatabase1673923434134 implements MigrationInterface {
    name = 'bootstrapDatabase1673923434134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "habits" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT ('NOW()'))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "habits"`);
    }

}
