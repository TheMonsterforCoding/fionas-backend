import { EntityRepository, Repository } from 'typeorm'
import { Customer } from '../entities/Customer'

@EntityRepository(Customer)
class CustomersRepositories extends Repository<Customer> {}

export { CustomersRepositories }
