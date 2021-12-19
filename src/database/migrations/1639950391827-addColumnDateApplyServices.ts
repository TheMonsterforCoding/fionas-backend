import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnDateApplyServices1639950391827 implements MigrationInterface {
    name = 'addColumnDateApplyServices1639950391827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services_apply` ADD `date` datetime NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services_apply` DROP COLUMN `date`");
    }

}
