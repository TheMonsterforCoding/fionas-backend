import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1625257607138 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'cpf',
            type: 'varchar'
          },
          {
            name: 'avatar',
            type: 'varchar'
          },
          {
            name: 'first_name',
            type: 'varchar'
          },
          {
            name: 'last_name',
            type: 'varchar'
          },
          {
            name: 'gender',
            type: 'boolean',
            default: true
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'year_of_birth',
            type: 'number'
          },
          {
            name: 'address',
            type: 'varchar'
          },
          {
            name: 'mail',
            type: 'varchar'
          },
          {
            name: 'mobile_number',
            type: 'number'
          },
          {
            name: 'state',
            type: 'boolean',
            default: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
