import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1625257607138 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '12',
          },
          {
            name: 'avatar',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'first_name',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'gender',
            type: 'boolean'
          },
          {
            name: 'password',
            type: 'varchar',
            length: '100'
          },
          {
            name: 'year_of_birth',
            type: 'integer',
            unsigned: true
          },
          {
            name: 'address',
            type: 'varchar',
            length: '100'
          },
          {
            name: 'mail',
            type: 'varchar',
            length: '100'
          },
          {
            name: 'mobile_number',
            type: 'varchar',
            length: '30'
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
