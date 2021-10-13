import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
  async create(request: Request, response: Response) {
    const {
      cpf,
      avatar,
      firstName,
      lastName,
      genderId,
      password,
      yearOfBirth,
      address,
      mail,
      mobileNumber,
      state,
      admin
     } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      cpf,
      avatar,
      firstName,
      lastName,
      genderId,
      password,
      yearOfBirth,
      address,
      mail,
      mobileNumber,
      state,
      admin
    })

    return response.json(user)
  }
}

export { CreateUserController }
