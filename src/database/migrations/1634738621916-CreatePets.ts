import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreatePets1634738621916 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pets',
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
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'gender',
            type: 'boolean',
            default: false
          },
          {
            name: 'year_of_birth',
            type: 'number'
          },
          {
            name: 'size',
            type: 'varchar'
          },
          {
            name: 'breed',
            type: 'varchar'
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
    await queryRunner.dropTable('pets')
  }
}
