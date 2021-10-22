import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('employees_type')
class EmployeeType {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  description: string
}

export { EmployeeType }
