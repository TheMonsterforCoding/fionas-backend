import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnTypeUserOfUser1637199882756 implements MigrationInterface {
    name = 'addColumnTypeUserOfUser1637199882756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` ADD `user_type` boolean NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `user_type`");
    }

}
