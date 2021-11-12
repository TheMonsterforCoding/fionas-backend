import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm'
import { User } from './User'
import { EmployeeType } from './EmployeeType'

@Entity('employees')
class Employee {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  employees_users_id: string
  @JoinColumn({ name: 'employees_users_id' })
  @ManyToOne(() => User)
  EmployeesUsersId: User

  @Column()
  employees_employees_type_id: number
  @JoinColumn({ name: 'employees_employees_type_id' })
  @ManyToOne(() => EmployeeType)
  EmployeesEmployeesTypeId: EmployeeType
}

export { Employee }
