import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnPartDayServiceApply1639899325769 implements MigrationInterface {
    name = 'addColumnPartDayServiceApply1639899325769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services_apply` ADD `part_day` varchar(20) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services_apply` DROP COLUMN `part_day`");
    }

}
