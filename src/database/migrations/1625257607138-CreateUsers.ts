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
            name: 'firstName',
            type: 'varchar'
          },
          {
            name: 'lastName',
            type: 'varchar'
          },
          {
            name: 'genderId',
            type: 'boolean'
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'yearOfBirth',
            type: 'varchar'
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
            name: 'mobileNumber',
            type: 'varchar'
          },
          {
            name: 'state',
            type: 'boolean',
            default: false
          },
          {
            name: 'admin',
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
