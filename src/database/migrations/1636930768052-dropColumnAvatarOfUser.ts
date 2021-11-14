import {MigrationInterface, QueryRunner} from "typeorm";

export class dropColumnAvatarOfUser1636930768052 implements MigrationInterface {
    name = 'dropColumnAvatarOfUser1636930768052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `avatar`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `users` ADD `avatar` varchar(255) NOT NULL");
    }

}
