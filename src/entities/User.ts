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
  avatar: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  genderId: boolean

  @Column()
  address: string

  @Column()
  mail: string

  @Column()
  mobileNumber: string

  @Exclude()
  @Column()
  password: string

  @Column()
  yearOfBirth: string

  @Column()
  state: boolean

  @Column()
  admin: boolean

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
