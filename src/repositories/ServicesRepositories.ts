import { EntityRepository, Repository } from 'typeorm'
import { Service } from '../entities/Service'

@EntityRepository(Service)
class ServicesRepositories extends Repository<Service> {}

export { ServicesRepositories }
