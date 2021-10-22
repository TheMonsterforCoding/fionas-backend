import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn
} from 'typeorm'
import { User } from './User'

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  date_last_visit: Date

  @Column()
  customers_users_id: string
  @JoinColumn({ name: 'customers_users_id' })
  @ManyToOne(() => User)
  CustomersHasPetsPetsId: User
}

export { Customer }
