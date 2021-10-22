import { EntityRepository, Repository } from 'typeorm'
import { ServiceState } from '../entities/ServiceState'

@EntityRepository(ServiceState)
class ServicesStateRepositories extends Repository<ServiceState> {}

export { ServicesStateRepositories }
