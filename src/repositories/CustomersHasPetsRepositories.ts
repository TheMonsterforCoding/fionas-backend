import { EntityRepository, Repository } from 'typeorm'
import { CustomerHasPet } from '../entities/CustomerHasPet'

@EntityRepository(CustomerHasPet)
class CustomersHasPetsRepositories extends Repository<CustomerHasPet> {}

export { CustomersHasPetsRepositories }
