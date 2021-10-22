import { EntityRepository, Repository } from 'typeorm'
import { Pet } from '../entities/Pet'

@EntityRepository(Pet)
class PetsRepositories extends Repository<Pet> {}

export { PetsRepositories }
