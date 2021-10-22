import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCustomers1634759572421 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'customers',
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
            name: 'date_last_visit',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'customers_users_id',
            type: 'uuid'
          }
        ],
        foreignKeys: [
          {
            name: 'fk_customers_users_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['customers_users_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers')
  }
}
