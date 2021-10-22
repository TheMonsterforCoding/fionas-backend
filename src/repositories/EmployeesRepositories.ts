import { EntityRepository, Repository } from 'typeorm'
import { Employee } from '../entities/Employee'

@EntityRepository(Employee)
class EmployeesRepositories extends Repository<Employee> {}

export { EmployeesRepositories }
