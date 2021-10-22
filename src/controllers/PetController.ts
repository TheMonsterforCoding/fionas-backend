import { Request, Response } from "express";
import { PetService } from "../services/PetService";

class PetController {
  async createPet(request: Request, response: Response) {
    const {
      name,
      gender,
      year_of_birth,
      size,
      breed,
      state
    } = request.body

    const petService = new PetService()

    const pet = await petService.createPet({
      name,
      gender,
      year_of_birth,
      size,
      breed,
      state
    })

    return response.json(pet)
  }

  async listPets(request: Request, response: Response) {
    const petService = new PetService()

    const pets = await petService.listPets()

    return response.json(pets)
  }

  async listPetFindId(request: Request, response: Response) {
    const { id } = request.params

    const petService = new PetService()

    const pet = await petService.listPetFindId(id)

    return response.json(pet)
  }
}

export { PetController }
