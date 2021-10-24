import { getCustomRepository } from 'typeorm'
import * as Yup from 'yup'

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

    /* ------------ Validar ------------ */
    const data = {
      name,
      gender,
      year_of_birth,
      size,
      breed,
      state
    }

    const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      gender: Yup.boolean().required('Gênero obrigatório'),
      year_of_birth: Yup.number().required('Ano de nascimento obrigatório'),
      size: Yup.string().required('Tamanho obrigatório'),
      breed: Yup.string().required('Raça obrigatória'),
      state: Yup.boolean().required('Estado obrigatório'),
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

    const pet = petsRepositories.create(data)

    await petsRepositories.save(pet)

    return pet
  }

  async listPets() {
    const petsRepositories = getCustomRepository(PetsRepositories)

    const pets = await petsRepositories.find()

    return pets
  }

  async listPetFindId(id: string) {
    const petsRepositories = getCustomRepository(PetsRepositories)

    const pet = await petsRepositories.findOne(id)

    return pet
  }
}

export { PetService }
