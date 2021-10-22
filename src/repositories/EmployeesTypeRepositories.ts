import { EntityRepository, Repository } from 'typeorm'
import { EmployeeType } from '../entities/EmployeeType'

@EntityRepository(EmployeeType)
class EmployeesTypeRepositories extends Repository<EmployeeType> {}

export { EmployeesTypeRepositories }
