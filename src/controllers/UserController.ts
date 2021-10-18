import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

class UserController {
  async createUser(request: Request, response: Response) {
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

    const userService = new UserService()

    const user = await userService.createUser({
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

  async listUsers(request: Request, response: Response) {
    const userService = new UserService()

    const users = await userService.listUsers()

    return response.json(users)
  }

  async listUserFindId(request: Request, response: Response) {
    const { id } = request.params

    const userService = new UserService()

    const userById = await userService.listUserFindId(id)

    return response.json(userById)
  }
}

export { UserController }
