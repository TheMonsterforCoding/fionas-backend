import {MigrationInterface, QueryRunner} from "typeorm";

export class dropColumnDescirptionOfEmployee1636732048184 implements MigrationInterface {
    name = 'dropColumnDescirptionOfEmployee1636732048184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `employees` DROP COLUMN `description`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `employees` ADD `description` varchar(255) NOT NULL");
    }

}
