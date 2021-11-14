import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { Exclude } from 'class-transformer'
import { v4 as uuid } from 'uuid'

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string

  @Column()
  cpf: string

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  gender: boolean

  @Exclude()
  @Column()
  password: string

  @Column()
  year_of_birth: number

  @Column()
  address: string

  @Column()
  mail: string

  @Column()
  mobile_number: number

  @Column()
  state: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { User }
