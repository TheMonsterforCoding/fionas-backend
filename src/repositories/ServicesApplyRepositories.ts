import { EntityRepository, Repository } from 'typeorm'
import { ServiceApply } from '../entities/ServiceApply'

@EntityRepository(ServiceApply)
class ServicesApplyRepositories extends Repository<ServiceApply> {}

export { ServicesApplyRepositories }
