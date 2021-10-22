import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm'
import { Pet } from './Pet'
import { Customer } from './Customer'

@Entity('customers_has_pets')
class CustomerHasPet {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  customers_has_pets_pets_id: number
  @JoinColumn({ name: 'customers_has_pets_pets_id' })
  @ManyToOne(() => Pet)
  CustomersHasPetsPetsId: Pet

  @Column()
  customers_has_pets_customers_id: number
  @JoinColumn({ name: 'customers_has_pets_customers_id' })
  @ManyToOne(() => Customer)
  CustomersHasPetsCustomersId: Customer
}

export { CustomerHasPet }
