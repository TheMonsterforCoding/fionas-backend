import { getCustomRepository } from 'typeorm'
import { PetsRepositories } from '../repositories/PetsRepositories'

interface PetProps {
  name: string
  gender: boolean
  year_of_birth: number
  size: string
  breed: string
  state: boolean
}

class PetService {
  async createPet({
    name,
    gender = true,
    year_of_birth,
    size,
    breed,
    state = false
  }: PetProps) {
    const petsRepositories = getCustomRepository(PetsRepositories)

    const pet = petsRepositories.create({
      name,
      gender,
      year_of_birth,
      size,
      breed,
      state
    })

    await petsRepositories.save(pet)

    return pet
  }

  async listPets() {
    const petsRepositories = getCustomRepository(PetsRepositories)

    const pets = await petsRepositories.find()

    return pets
  }

  async listPetFindId(id: number) {
    const petsRepositories = getCustomRepository(PetsRepositories)

    const pet = await petsRepositories.findOne(id)

    return pet
  }
}

export { PetService }
