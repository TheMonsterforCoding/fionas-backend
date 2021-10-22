import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CustomersHasPets1634759682406 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'customers_has_pets',
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
            name: 'customers_has_pets_pets_id',
            type: 'uuid'
          },
          {
            name: 'customers_has_pets_customers_id',
            type: 'uuid'
          }
        ],
        foreignKeys: [
          {
            name: 'fk_customers_has_pets_pets_id',
            referencedTableName: 'pets',
            referencedColumnNames: ['id'],
            columnNames: ['customers_has_pets_pets_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'fk_customers_has_pets_customers_id',
            referencedTableName: 'customers',
            referencedColumnNames: ['id'],
            columnNames: ['customers_has_pets_customers_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers_has_pets')
  }
}
