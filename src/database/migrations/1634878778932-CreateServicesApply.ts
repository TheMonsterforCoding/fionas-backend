import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateServicesApply1634878778932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'services_apply',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'services_apply_customers_has_pets_id',
            type: 'uuid'
          },
          {
            name: 'services_apply_employees_id',
            type: 'uuid'
          },
          {
            name: 'services_apply_services_state_id',
            type: 'uuid'
          },
          {
            name: 'services_apply_services_id',
            type: 'uuid'
          }
        ],
        foreignKeys: [
          {
            name: 'fk_services_apply_customers_has_pets_id',
            referencedTableName: 'customers_has_pets',
            referencedColumnNames: ['id'],
            columnNames: ['services_apply_customers_has_pets_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'fk_services_apply_employees_id',
            referencedTableName: 'employees',
            referencedColumnNames: ['id'],
            columnNames: ['services_apply_employees_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'fk_services_apply_services_state_id',
            referencedTableName: 'services_state',
            referencedColumnNames: ['id'],
            columnNames: ['services_apply_services_state_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'fk_services_apply_services_id',
            referencedTableName: 'services',
            referencedColumnNames: ['id'],
            columnNames: ['services_apply_services_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('services_apply')
  }
}
