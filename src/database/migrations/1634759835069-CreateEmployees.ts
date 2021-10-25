import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateEmployees1634759835069 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employees',
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
            name: 'description',
            type: 'varchar',
            length: '250',
          },
          {
            name: 'employees_users_id',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'employees_employees_type_id',
            type: 'integer',
            unsigned: true,
            isNullable: true,
          }
        ],
        foreignKeys: [
          {
            name: 'fk_employees_users_id',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['employees_users_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          },
          {
            name: 'fk_employees_employees_type_id',
            referencedTableName: 'employees_type',
            referencedColumnNames: ['id'],
            columnNames: ['employees_employees_type_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees')
  }
}
