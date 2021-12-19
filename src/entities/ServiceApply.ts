import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn
} from 'typeorm'
import { CustomerHasPet } from './CustomerHasPet'
import { Employee } from './Employee'
import { ServiceState } from './ServiceState'
import { Service } from './Service'

@Entity('services_apply')
class ServiceApply {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  date: Date

  @Column()
  part_day: string
  
  @CreateDateColumn()
  created_at: Date

  @Column()
  services_apply_customers_has_pets_id: number
  @JoinColumn({ name: 'services_apply_customers_has_pets_id' })
  @ManyToOne(() => CustomerHasPet)
  ServicesApplyCustomersHasPetsId: CustomerHasPet

  @Column()
  services_apply_employees_id: number
  @JoinColumn({ name: 'services_apply_employees_id' })
  @ManyToOne(() => Employee)
  ServicesApplyEmployeesId: Employee

  @Column()
  services_apply_services_state_id: number
  @JoinColumn({ name: 'services_apply_services_state_id' })
  @ManyToOne(() => ServiceState)
  ServicesApplyServicesStateId: ServiceState

  @Column()
  services_apply_services_id: number
  @JoinColumn({ name: 'services_apply_services_id' })
  @ManyToOne(() => Service)
  ServicesApplyServicesId: Service
}

export { ServiceApply }
