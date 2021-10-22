import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity('services')
class Service {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'decimal' })
  price: number

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export { Service }
